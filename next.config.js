/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        LOCAL: 'http://localhost:3000',
        PROD: 'https://nextjs-todo-app-woad.vercel.app/'
    }
};

module.exports = nextConfig;
