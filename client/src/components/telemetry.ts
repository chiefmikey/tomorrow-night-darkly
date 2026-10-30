type Properties = Record<string, boolean | number | string>;

declare global {
  var wolfeTelemetry:
    { capture: (event: string, props?: Properties) => void } | undefined;
}

export const capture = (event: string, props?: Properties): void => {
  try {
    globalThis.wolfeTelemetry?.capture(event, props);
  } catch {
    // telemetry must never break the page
  }
};
