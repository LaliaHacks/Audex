import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import placeholder from '../public/placeholder.jpg';
import Link from 'next/link';
import Navbar from '../components/navbar';
import axios from 'axios';

async function callAPI(text) {
  try {
      const response = await axios.post('./api/custom_endpoint', { text });
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}

export default function Generate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const audioRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1 second delay
      const imageDataUrl = reader.result;
      setSelectedImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleAudioButton = () => {
    const inputText = document.getElementById("generatedText").textContent;
    callAPI(inputText);
    // const blob = callAPI(inputText);
    // try {
    //     const audioUrl = window.URL.createObjectURL(blob);
    //     const audio = new Audio(audioUrl);
    //     audio.play();
    // } catch (error) {
    //     console.error(error);
    // }
  };
  const play = () => {
    console.log("hello")
    if (audioRef.current) {
      audioRef.current.play();
      console.log("it should be playing")
    } else {
      // Throw error
    }
    // const audioFile = '/media/output.mp3';
    // setAudioUrl(audioFile);
  }

  return (
    <div>
      <Head>
        <title>Audex</title>
        <link rel="icon" href="/mainIcon.png" />
      </Head>
      
      <div className="flex flex-col items-center">
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
        <div className="flex flex-col justify-items-center w-full sm:w-3/5 mt-24">
          <div className="flex flex-col border-2 m-4 p-8">
            <div className="text-3xl font-medium pb-8">
              Maximize Your Productivity
            </div>
            <div className="font-inter">
              This is just some sample text lorem ipsum stuff
            </div>
          </div>
          <div className="flex flex-col m-4 p-6 items-center">
              <div className="mt-4 flex justify-center items-center">
                  {!isLoading && selectedImage && (
                      <div className="flex justify-center items-center">
                          <div className="w-70 sm:w-80 md:w-96">
                          <Image
                              src={selectedImage}
                              alt="Selected"
                              width={800}
                              height={600}
                              className="w-full"
                          />
                          </div>
                      </div>
                  )}

                  {!isLoading && !selectedImage && (
                      <div className="flex justify-center items-center">
                          <div className="w-70 sm:w-80 md:w-96">
                          <Image
                              src={placeholder}
                              alt="Placeholder"
                              width={800}
                              height={600}
                              className="w-full"
                          />
                          </div>
                      </div>
                  )}       
              </div>

              {isLoading && (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
                      <div className="h-9 w-9 rounded-full bg-[#080808]"></div>
                  </div>
              )}

              <div className="flex flex-row justify-center items-center w-full md:w-1/2 sm:w-11/12 border-2 rounded-3xl m-8 p-2">
                  <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className='w-full sm:w-10/12'
                  />
                  {/* <div className='w-px h-8 border-2'></div>

                  <button onClick={handleCameraCapture} className='w-full sm:w-1/2'>Take a Photo</button> */}
              </div>
            
            
          </div>
          <div className="flex flex-col border-2 m-4 p-8">Others</div>
        </div>
        <div className="flex flex-col border-2 m-4 p-8">
            <div id="generatedText">
                It changed again, oh my god!
            </div>
          <button onClick={handleAudioButton}>Convert to Speech</button>
          <audio ref={audioRef} src='/media/output.mp3'/>
            {/* {audioUrl && (
            <audio controls>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )} */}
          <button onClick={play}>Play</button>
        </div>
      </div>
    </div>
    
  );
}