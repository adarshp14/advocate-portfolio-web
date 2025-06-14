
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Track 404 errors for analytics (could send to monitoring service)
    // Route not found: location.pathname
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - 404 Error | Muhammad Obaid Advocate</title>
        <meta name="description" content="The page you are looking for could not be found. Please return to the homepage or contact Muhammad Obaid's legal practice for assistance with your legal needs in Kolkata and Howrah." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://advocate-obaid.vercel.app/404" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Page Not Found - 404 Error | Muhammad Obaid Advocate" />
        <meta property="og:description" content="The page you are looking for could not be found. Please return to the homepage or contact Muhammad Obaid's legal practice." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-obaid.vercel.app/404" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Page Not Found - 404 Error | Muhammad Obaid Advocate" />
        <meta name="twitter:description" content="The page you are looking for could not be found. Please return to the homepage or contact Muhammad Obaid's legal practice." />
      </Helmet>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="glass-card max-w-md w-full text-center py-16">
        <h1 className="text-5xl font-bold text-lawyer-navy mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">The page you are looking for could not be found.</p>
        <Link to="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
    </>
  );
};

export default NotFound;
