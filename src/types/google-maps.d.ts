
declare global {
  interface Window {
    initMap: (() => void) | null;
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
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
