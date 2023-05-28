import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
