import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "hyakunin-isshu-diagnosis";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubActions ? `/${repositoryName}` : "",
  assetPrefix: isGitHubActions ? `/${repositoryName}/` : "",
};

export default nextConfig;
