import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/mainIcon.png" />
      </Head>

      <main>
        <header className="flex flex-row justify-between fixed top-0 z-50 w-full p-4 sm:p-8 bg-[#080808]">
          <Link href="/landing">
            <Image
                className="ml-4 w-24 sm:w-32 object-contain"
                alt="Audex Logo"
                src="/mainLogo.png"
                width={140}
                height={50}
            />
          </Link>    
          
          <div className="flex flex-row gap-5 sm:gap-20 mr-2 sm:mr-40 items-center">
            <Link href="/landing" className='hover:text-primary'>
              Home
            </Link>
            <Link href="/generate" className='hover:border-secondary border-primary border-2 rounded-3xl px-4 py-1 align-middle'>
              Try Audex
            </Link>
          </div>
        </header>
        <h1 className="bg-blue-300 border-4">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className="border-4 font-sans text-text bg-background">
          xperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time word
        </div>
        <div className="border-4 text-primary">
          xperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
        </div>
        <div className="border-4 text-secondary">
          xperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
        </div>
        <div className="border-4 font-inter">
          xperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time word
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" />
        </a>
      </footer>
    </div>
  )
}
