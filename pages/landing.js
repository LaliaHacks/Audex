import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <div>
      <Head>
        <title>Audex Guide</title>
        <link rel="icon" href="/Audex_icon-modified.png" />
      </Head>

      <main className='flex flex-col items-center'>
      
      <header className="flex flex-row justify-between fixed top-0 z-50 w-full p-4 sm:p-8 border-2 bg-[#080808]">
        <Link href="/landing">
          <Image
              className="ml-4 w-24 sm:w-32 object-contain"
              alt="Audex Logo"
              src="/mainLogo.png"
              width={140}
              height={50}
          />
        </Link>    
        
        <div className="flex flex-row gap-5 sm:gap-20 mr-2 sm:mr-40">
          <Link block color="error" href="/landing">
            Home
          </Link>
          <Link block color="error" href="/generate">
            Try Audex
          </Link>
        </div>
      </header>

      <div className='flex flex-col justify-items-center w-full sm:w-3/5'>
        <div className='grid place-content-center py-40'>
          <Image alt="Audex Logo" src="/mainLogo.png" width={300} height={150} className='max-w-screen-lg'/>
        </div>
        <div className="place-content-center pt-10 p-6" id="first-section">
          <h1 className=" text-2xl">
            What is Audex?
          </h1>
          <ul className=" text-sm list-disc pt-2 pl-8">
            <li>Audex(Audio Experience) is a web app designed to enable users to enjoy a hyper immersive travel experience from anywhere in the world</li>
            <li>Audex provides users with a captivating audio experience to accompany the sights they come across on their trip</li>
            <li>The audio experience has 2 components:</li>
              <ul className='list-decimal pl-10'>
                <li>A detailed and enthralling description generated in real time by some of the world’s most advanced large language models (LLMs)</li>
                <li>A factual component that shares interesting facts about the location. These could be historical, geographical or just general fun facts</li>
              </ul>
          </ul>
        </div>
        <div className="place-content-center pt-8 p-6" id="second-section">
          <h1 className=" text-2xl">
            Who is Audex for?
          </h1>
          <ul className=" text-sm list-disc pt-2 pl-8">
            <li>Audex was built for the traveller who wishes to maximise their trip by experiencing sights and adventures in multiple ways</li>
            <li>The Audex user interface is also designed to be minimal and simple, in order to assist the visually impaired community who we believe will benefit the most from our product</li>
            <li>The audio experience has 2 components:</li>
          </ul>
        </div>
        <div className="place-content-center pt-8 p-6" id="third-section">
          <h1 className=" text-2xl">
            How do I use Audex?
          </h1>
          <ul className="text-sm list-decimal pt-2 pl-8">
            <li>Click on the “Try it now” button below to access Audex</li>
            <li>Upload an existing image from your device OR Take a photo from your device’s camera and upload it to Audex</li>
            <li>Wait for Audex to generate a description</li>
            <li>Press play to listen to the description once its ready!</li>
          </ul>
        </div>
        {/* <div className='grid place-content-center py-10'>
          <Button size='xl' shadow color={'gradient'} className='text-2xl'>Try it Now!</Button>
        </div> */}
        <div className='grid place-content-center py-10'>
          <Link href="/generate" className='inline-block px-6 py-3 m-16 rounded-full border-2 border-primary text-center tracking-wider text-sm'>
            GET STARTED FOR FREE
          </Link>
        </div>
      </div>
      
      </main>

      <footer>
      </footer>
    </div>
  )
}
