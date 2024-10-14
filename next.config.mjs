import path from "path";
import fs from "fs-extra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tapAsync(
            "CopyImagesPlugin",
            (compilation, callback) => {
              const srcDir = path.join(process.cwd(), "src", "app", "img");
              const destDir = path.join(process.cwd(), "public", "images");
              fs.copy(srcDir, destDir, (err) => {
                if (err) {
                  console.error("Error copying images:", err);
                } else {
                  console.log("Images copied successfully");
                }
                callback();
              });
            }
          );
        },
      });
    }
    return config;
  },
};

export default nextConfig;
