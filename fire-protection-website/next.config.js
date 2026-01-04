/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Add domains for any external images if needed
    unoptimized: true // This allows local images to work without optimization
  },
  // Remove output: 'export' for Vercel deployment
  // Vercel handles the build process automatically
}

module.exports = nextConfig
