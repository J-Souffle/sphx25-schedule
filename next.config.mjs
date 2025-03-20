/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com'],
    },
    output: "export",
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }

};

export default nextConfig;
