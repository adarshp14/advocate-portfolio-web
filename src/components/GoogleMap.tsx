
import React, { useEffect, useRef, useState, useMemo } from 'react';

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

const GoogleMap: React.FC<GoogleMapProps> = React.memo(({ address, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  
  // Memoize the script source URL to avoid recreation
  const scriptSrc = useMemo(() => 
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&loading=async`,
    [apiKey]
  );
  
  useEffect(() => {
    // Check if script is already loaded to avoid duplicates
    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    // Reset error state
    setMapError(null);
    
    // Error handler for API loading issues
    window.gm_authFailure = () => {
      setMapError('Google Maps API key error: The API key provided is invalid or the Maps JavaScript API is not enabled for this key. Please check your Google Cloud Console.');
    };
    
    // Load the Google Maps script dynamically
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    
    // Handle script loading error
    script.onerror = () => {
      setMapError('Failed to load Google Maps. Please check your internet connection and API key.');
    };
    
    // Define the callback function that Google Maps will call
    window.initMap = () => {
      if (!mapRef.current || !window.google) return;
      
      try {
        // Use the Geocoding service to convert address to coordinates
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const map = new window.google.maps.Map(mapRef.current, {
              center: results[0].geometry.location,
              zoom: 15,
              mapTypeControl: true,
              streetViewControl: true,
              fullscreenControl: true,
            });
            
            // Add a marker for the location
            new window.google.maps.Marker({
              map,
              position: results[0].geometry.location,
              animation: window.google.maps.Animation.DROP,
            });
          } else {
            // Handle geocoding failure silently and show user-friendly message
            setMapError(`Unable to locate address. Using default location.`);
            
            // Fallback to a default location (Calcutta High Court)
            const defaultPosition = { lat: 22.5698, lng: 88.3468 }; // Approximate coordinates for Calcutta High Court
            const map = new window.google.maps.Map(mapRef.current, {
              center: defaultPosition,
              zoom: 15,
            });
            
            new window.google.maps.Marker({
              map,
              position: defaultPosition,
            });
          }
        });
      } catch (error) {
        // Handle map initialization error with user-friendly message
        setMapError('Unable to load map at this time. Please try refreshing the page.');
      }
    };
    
    // Add the script to the document
    document.head.appendChild(script);
    
    // Set a timeout to detect if the API fails to load
    const timeoutId = setTimeout(() => {
      if (!window.google?.maps) {
        setMapError('Google Maps failed to load. Please check your API key or internet connection.');
      }
    }, 5000);
    
    // Clean up
    return () => {
      clearTimeout(timeoutId);
      window.initMap = null;
      window.gm_authFailure = null;
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [address, apiKey, scriptSrc]);
  
  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg"></div>
      {mapError && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center p-6 rounded-lg">
          <div className="text-center">
            <p className="text-red-600 font-medium mb-3">{mapError}</p>
            <p className="text-gray-700 text-sm">
              To fix this issue:
              <ol className="list-decimal text-left mt-2 pl-4">
                <li>Go to <a href="https://console.cloud.google.com/google/maps-apis/overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Cloud Console</a></li>
                <li>Select your project</li>
                <li>Enable the "Maps JavaScript API"</li>
                <li>Make sure billing is set up for your Google Cloud project</li>
                <li>Ensure your API key has the proper restrictions</li>
              </ol>
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

export default GoogleMap;
