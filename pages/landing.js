import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import Navbar from '../components/navbar';


export default function Landing() {
  return (
    <div>
      <Head>
        <title>Audex Guide</title>
        <link rel="icon" href="/Audex_icon-modified.png" />
      </Head>

      <main className='flex flex-col items-center'>
      {/* <Navbar isBordered shouldHideOnScroll={false} activeColor="primary" value="primary" css={{
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent",
      }}>
        <Navbar.Brand>
            <Image alt="Audex Logo" src="/mainLogo.png" width={140} height={50} />
        </Navbar.Brand>
        <Link block color='error' href="#first-section">Home</Link>
        <Link block color='error' href="#second-section">Try Audex</Link>
      </Navbar> */}

      <Navbar/>

      <div className='flex flex-col justify-items-center w-full sm:w-3/5'>
        <div className='grid place-content-center py-40'>
          <Image alt="Audex Logo" src="/mainLogo.png" width={300} height={150} className='max-w-screen-lg'/>
        </div>

        <div className="place-content-center pt-10 p-6">
          <h1 className=" text-2xl font-bold">Welcome to Audex: Revolutionizing Travel Experiences</h1>
          <p className="pt-4 text-justify">Experience the world like never before with Audex (Audio Experience), a groundbreaking web app that transports you on a hyper-immersive journey from anywhere in the world. Audex is designed to enhance your travel adventures by providing a captivating audio experience that accompanies the sights you encounter along the way.</p>

          <h1 className=" pt-10 text-2xl font-bold">Immersive Audio Delivered in Two Components</h1>
          <p className="pt-4 text-justify">Audex offers a truly unique audio experience that consists of two components, meticulously crafted to provide an unforgettable journey:</p>
          <ul className=" text-sm list-decimal pt-2 pl-8">
            <li className='font-bold'>Real-Time Descriptions by Advanced Language Models:</li>
            <p className="text-justify" >Prepare to be enthralled as Audex generates detailed and enthralling descriptions in real time, utilizing some of the world's most advanced large language models (LLMs). These cutting-edge models ensure that every description is vivid, engaging, and tailored to the specific location, enriching your travel experience like never before.</p>
            <li className='font-bold'>Fascinating Factual Insights:</li>
            <p className='text-justify'>In addition to the immersive descriptions, Audex also provides a factual component that shares intriguing facts about the location you're exploring. These facts could encompass historical significance, geographical wonders, or simply fun trivia, deepening your understanding and appreciation of each destination.</p>
          </ul>

          <h1 className=" pt-10 text-2xl font-bold">Who Can Benefit from Audex?</h1>
          <p className='pt-4 text-justify'>Audex was created with a vision to amplify the experiences of all travelers, and we're particularly dedicated to supporting the visually impaired community. Our user interface has been thoughtfully designed to be minimalistic and user-friendly, ensuring easy navigation and a seamless experience for everyone. We believe that Audex can truly enrich the adventures of those seeking multi-dimensional travel experiences.</p>

          <h1 className=" pt-10 text-2xl font-bold">How to Harness the Power of Audex?</h1>
          <p className='pt-4 text-justify' >Getting started with Audex is a breeze! Follow these simple steps to embark on your extraordinary audio journey:</p>
          <ul className="text-justify text-sm list-decimal py-2 pl-8">
            <li>Click on the "GET STARTED" button below, granting you access to Audex's transformative features.</li>
            <li>Upload an existing image from your device and let Audex breathe life into it.</li>
            <li>Sit back and relax as Audex works its magic, utilizing advanced algorithms to generate a detailed description tailored to your chosen image.</li>
            <li>Once Audex completes the generation process, press play and allow the audio description to transport you to a world of wonder, painting vivid pictures with words.</li>
          </ul>
          <p className='text-justify'>Discover a new way to experience the world with Audex. Unleash the power of your imagination and indulge in captivating audio journeys, ensuring that every trip is a truly unforgettable adventure. Try Audex today and embark on a limitless exploration of sights, sounds, and stories.</p>
        </div>
        {/* <div className='grid place-content-center py-10'>
          <Button size='xl' shadow color={'gradient'} className='text-2xl'>Try it Now!</Button>
        </div> */}
        <div className='grid place-content-center py-8'>
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
