/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/shared/styles')],
    additionalData: `@import "variables.scss";`,
  },
  images: {
    domains: ['*'],
  },
};

export default nextConfig; 