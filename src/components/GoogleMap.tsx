
import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load the Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the callback function that Google Maps will call
    window.initMap = () => {
      if (!mapRef.current) return;
      
      // Use the Geocoding service to convert address to coordinates
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 15,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
          });
          
          // Add a marker for the location
          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
            animation: google.maps.Animation.DROP,
          });
        } else {
          console.error('Geocoding failed:', status);
          // Fallback to a default location (Calcutta High Court)
          const defaultPosition = { lat: 22.5698, lng: 88.3468 }; // Approximate coordinates for Calcutta High Court
          const map = new google.maps.Map(mapRef.current, {
            center: defaultPosition,
            zoom: 15,
          });
          
          new google.maps.Marker({
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
      document.head.removeChild(script);
    };
  }, [address, apiKey]);
  
  return (
    <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg"></div>
  );
};

export default GoogleMap;
