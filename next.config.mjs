/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  // experimental: { typedRoutes: true }  ← удаляем эту строку
  // и заодно удаляем serverActions, если остался:
  // experimental: { serverActions: true } ← тоже удалить
=======
  // no experimental flags
>>>>>>> 86af2e5 (fix(build): remove experimental flags, type-safe Link href, postcss cjs)
};
export default nextConfig;
