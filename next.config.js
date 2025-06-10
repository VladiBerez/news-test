/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/shared/styles')],
    additionalData: `@import "variables.scss";`,
  },
  images: {
    domains: ['*'],
    unoptimized: true
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/news-test' : '',
};

export default nextConfig; 