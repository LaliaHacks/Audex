import Head from 'next/head';
import Image from 'next/image';
import { Navbar, Button, Link } from "@nextui-org/react";


export default function Landing() {
  return (
    <div>
      <Head>
        <title>Audex Guide</title>
        <link rel="icon" href="/Audex_icon-modified.png" />
      </Head>

      <main>
      <Navbar isBordered shouldHideOnScroll={true} css={{
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent"
      }}>
        <Navbar.Brand>
            <Image alt="Audex Logo" src="/Audex_logo.png" width={100} height={50} />
        </Navbar.Brand>
        <Link block color='primary' href="#first-section">What</Link>
        <Link block color='primary' href="#second-section">Who</Link>
        <Link block color='primary'href="#third-section">How</Link>
      </Navbar>
      <div className='grid place-content-center py-40'>
        <Image alt="Audex Logo" src="/Audex_logo.png" width={300} height={150} className='max-w-screen-lg'/>
      </div>
      <div className="place-content-center pt-10 p-6" id="first-section">
        <h1 className=" text-3xl">
          What is Audex?
        </h1>
        <ul className=" text-md list-disc pt-2 pl-8">
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
        <h1 className=" text-3xl">
          Who is Audex for?
        </h1>
        <ul className=" text-md list-disc pt-2 pl-8">
          <li>Audex was built for the traveller who wishes to maximise their trip by experiencing sights and adventures in multiple ways</li>
          <li>The Audex user interface is also designed to be minimal and simple, in order to assist the visually impaired community who we believe will benefit the most from our product</li>
          <li>The audio experience has 2 components:</li>
        </ul>
      </div>
      <div className="place-content-center pt-8 p-6" id="third-section">
        <h1 className=" text-3xl">
          How do I use Audex?
        </h1>
        <ul className="text-md list-decimal pt-2 pl-8">
          <li>Click on the “Try it now” button below to access Audex</li>
          <li>Upload an existing image from your device OR Take a photo from your device’s camera and upload it to Audex</li>
          <li>Wait for Audex to generate a description</li>
          <li>Press play to listen to the description once its ready!</li>
        </ul>
      </div>
      <div className='grid place-content-center py-10'>
        <Button size='xl' shadow color={'gradient'} className='text-2xl'>Try it Now!</Button>
      </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
