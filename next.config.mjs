import createNextIntlPlugin from "next-intl/plugin";

const nextIntlPlugin = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
        },
        {
          protocol: "https",
          hostname: "vrwikubwuvdqfnymmmjt.supabase.co",
          pathname: "/storage/v1/object/public/**",
        }
      ],
    },
};

export default nextIntlPlugin(nextConfig);
