declare global {
    interface Window {
        IN?: {
            parse: (element: Document | Element) => void;
        };
    }
}

export {};

