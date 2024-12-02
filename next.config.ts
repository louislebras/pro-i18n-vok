import type { NextConfig } from "next";
import { i18n } from "./i18n-config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  i18n: i18n,
};

export default nextConfig;
