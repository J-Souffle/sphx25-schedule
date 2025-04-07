/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com'],
        unoptimized: true, // Disable image optimization for static export
    },
    output: "export",
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
};

export default nextConfig;
