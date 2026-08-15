import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});

export default {
  ...config,
  // Avoid recursing into `opennextjs-cloudflare build` when Cloudflare runs the build script.
  buildCommand: "next build",
};
