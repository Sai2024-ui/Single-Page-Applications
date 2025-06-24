/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:'www.financialexpress.com',
            protocol:'https',
        },
        {
            hostname:'upload.wikimedia.org',
            protocol:'https',
        }]
    }
    
};

export default nextConfig;
