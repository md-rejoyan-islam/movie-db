/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "image.tmdb.org" },
      { hostname: "facebook.com" },
      { hostname: "x.com" },
      { hostname: "linkedin.com" },
      { hostname: "api.themoviedb.org" },
    ],
  },
};

export default nextConfig;
