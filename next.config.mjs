import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});
 
export default withNextra({
  output: 'standalone',
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH
});
