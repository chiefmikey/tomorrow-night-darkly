type Properties = Record<string, boolean | number | string>;

declare global {
  interface Window {
    wolfeTelemetry?: { capture: (event: string, props?: Properties) => void };
  }
}

export const capture = (event: string, props?: Properties) => {
  try {
    globalThis.wolfeTelemetry?.capture(event, props);
  } catch {
    // telemetry must never break the page
  }
};
