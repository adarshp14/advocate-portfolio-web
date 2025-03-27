
import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if script is already loaded to avoid duplicates
    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    // Load the Google Maps script dynamically
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the callback function that Google Maps will call
    window.initMap = () => {
      if (!mapRef.current || !window.google) return;
      
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
          console.error('Geocoding failed:', status);
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
    };
    
    // Add the script to the document
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      window.initMap = null;
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [address, apiKey]);
  
  return (
    <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg"></div>
  );
};

export default GoogleMap;
