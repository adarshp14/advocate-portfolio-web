
interface GoogleMapOptions {
  center: { lat: number; lng: number };
  zoom: number;
}

interface GoogleMarkerOptions {
  map: GoogleMap;
  position: { lat: number; lng: number };
  animation?: number;
}

interface GoogleMap {
  // Google Map instance methods would be defined here
}

interface GoogleMarker {
  // Google Marker instance methods would be defined here
}

declare global {
  interface Window {
    initMap: (() => void) | null;
    gm_authFailure: (() => void) | null;
    google: {
      maps: {
        Map: new (element: HTMLElement, options: GoogleMapOptions) => GoogleMap;
        Marker: new (options: GoogleMarkerOptions) => GoogleMarker;
        Geocoder: new () => {
          geocode: (
            request: { address?: string; location?: { lat: number; lng: number } },
            callback: (results: Array<{ geometry: { location: { lat: () => number; lng: () => number } } }>, status: string) => void
          ) => void;
        };
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

export {};
