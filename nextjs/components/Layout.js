import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mixed Reality & AI Games</title>
      </Head>
      <header className="site-header">
        <h1 className="site-title">Mixed Reality & AI Games</h1>
        <p className="site-tagline">Exploring newspaper-inspired XR & AI gaming</p>
      </header>
      <main className="site-main">{children}</main>
    </>
  );
}
