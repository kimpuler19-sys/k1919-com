/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  reactCompiler: true,

  // Tambahkan fungsi pengalihan URL ke file HTML di bawah ini:
  async redirects() {
    return [
      {
        source: '/joko-nardi',
        destination: '/jokonardi.html',
        permanent: true,
      },
      {
        source: '/jokonardi',
        destination: '/jokonardi.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
