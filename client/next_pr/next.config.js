/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        externalDir: true,
        typedRoutes: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;