/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withVideos = require("next-videos");

(module.exports = withVideos()),
  {
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      // Important: return the modified config
      return config;
    },
  };
