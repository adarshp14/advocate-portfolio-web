
declare global {
  interface Window {
    initMap: (() => void) | null;
    google: {
      maps: {
        Map: any;
        Marker: any;
        Geocoder: any;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

export {};
