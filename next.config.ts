import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/install.sh",
        destination:
          "https://raw.githubusercontent.com/fmontes/dotfiles/main/bootstrap.sh",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
