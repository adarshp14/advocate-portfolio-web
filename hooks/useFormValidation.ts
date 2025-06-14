import { useState, useCallback } from 'react';

interface ValidationRules {
  [fieldName: string]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    customValidator?: (value: string) => string | null;
  };
}

interface FormErrors {
  [fieldName: string]: string;
}

interface UseFormValidationReturn<T> {
  values: T;
  errors: FormErrors;
  isValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validateField: (name: string, value: string) => string;
  validateForm: () => boolean;
  resetForm: () => void;
  setFieldValue: (name: string, value: string) => void;
  setFieldError: (name: string, error: string) => void;
}

export function useFormValidation<T extends Record<string, string>>(
  initialValues: T,
  validationRules: ValidationRules
): UseFormValidationReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const sanitizeInput = useCallback((value: string): string => {
    return value.replace(/<[^>]*>/g, '').trim();
  }, []);

  const validateField = useCallback((name: string, value: string): string => {
    const rules = validationRules[name];
    if (!rules) return '';

    const sanitizedValue = sanitizeInput(value);

    // Required validation
    if (rules.required && !sanitizedValue) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    // Skip other validations if field is empty and not required
    if (!sanitizedValue && !rules.required) {
      return '';
    }

    // Min length validation
    if (rules.minLength && sanitizedValue.length < rules.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`;
    }

    // Max length validation
    if (rules.maxLength && sanitizedValue.length > rules.maxLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be no more than ${rules.maxLength} characters`;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(sanitizedValue)) {
      switch (name) {
        case 'email':
          return 'Please enter a valid email address';
        case 'phone':
          return 'Please enter a valid phone number';
        case 'name':
          return 'Name can only contain letters and spaces';
        default:
          return `${name.charAt(0).toUpperCase() + name.slice(1)} format is invalid`;
      }
    }

    // Custom validation
    if (rules.customValidator) {
      const customError = rules.customValidator(sanitizedValue);
      if (customError) return customError;
    }

    return '';
  }, [validationRules, sanitizeInput]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setValues(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Real-time validation only if field has been touched
    if (touched[name]) {
      const error = validateField(name, sanitizedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  }, [sanitizeInput, validateField, touched]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isFormValid = true;

    Object.keys(values).forEach(name => {
      const error = validateField(name, values[name]);
      if (error) {
        newErrors[name] = error;
        isFormValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(values).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {}));

    return isFormValid;
  }, [values, validateField]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const setFieldValue = useCallback((name: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const setFieldError = useCallback((name: string, error: string) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  const isValid = Object.values(errors).every(error => !error) && 
                  Object.keys(validationRules).every(key => 
                    !validationRules[key].required || values[key]
                  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    handleBlur,
    validateField,
    validateForm,
    resetForm,
    setFieldValue,
    setFieldError
  };
}