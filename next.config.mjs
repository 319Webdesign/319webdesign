/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' entfernt - wird für API-Routen benötigt
  trailingSlash: false, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

