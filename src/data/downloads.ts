export type DownloadChannel = "stable" | "beta";
export type DownloadSource = "manual" | "update";

const TRACKING_GATEWAY_ORIGIN = "https://auth.aether.7caifei.com";
const CURRENT_DOWNLOAD_VERSIONS: Record<DownloadChannel, string> = {
  stable: "0.1.0",
  beta: "0.1.14",
};

function downloadPath(channel: DownloadChannel): string {
  return channel === "beta" ? "/beta/Aether.dmg" : "/download/Aether.dmg";
}

export function trackedDownloadURL(
  channel: DownloadChannel,
  source: DownloadSource,
  version: string = CURRENT_DOWNLOAD_VERSIONS[channel],
): string {
  const url = new URL(downloadPath(channel), TRACKING_GATEWAY_ORIGIN);
  url.searchParams.set("source", source);
  url.searchParams.set("channel", channel);
  url.searchParams.set("version", version);
  return url.toString();
}

export function manualDownloadURL(channel: DownloadChannel): string {
  return trackedDownloadURL(channel, "manual");
}
