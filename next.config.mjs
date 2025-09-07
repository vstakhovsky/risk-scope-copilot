/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { typedRoutes: true }  ← удаляем эту строку
  // и заодно удаляем serverActions, если остался:
  // experimental: { serverActions: true } ← тоже удалить
};
export default nextConfig;
