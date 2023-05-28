import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from "@nextui-org/react";


export default function Landing() {
  return (
    <div>
      <Head>
        <title>Audex Guide</title>
        <link rel="icon" href="/Audex_icon-modified.png" />
      </Head>

      <main>
      <Navbar isBordered className="bg-black">
        <Navbar.Brand className="bg-black">
            <Image alt="Audex Logo" src="/Audex_logo.png" width={80} height={40} />
        </Navbar.Brand>

      </Navbar>
        <div className="place-content-center">
        <Image alt="Audex Logo" src="/Audex_logo.png" width={400} height={200} className="max-w-3xl h-auto" />
        </div>
        <h1 className="bg-blue-400 text-3xl">
          Welcome to <a href="https://nextjs.org">Audex!</a>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/Audex_logo.png" alt="Vercel" />
        </a>
      </footer>
    </div>
  )
}
