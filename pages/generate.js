import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import placeholder from '../public/placeholder.jpg';
import Link from 'next/link';
import Navbar from '../components/navbar';
import axios from 'axios';
import { MdOutlinePlayCircle } from 'react-icons/md';

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
  const [description, setDescription] = useState('placeholder');
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const audioRef = useRef();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      setIsLoading(true);
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 1 second delay
        const imageDataUrl = reader.result;
        setSelectedImage(imageDataUrl);
  
        // Create form data and append the uploaded image file
        const formData = new FormData();
        formData.append('image', file);
  
        // Make a request to your backend server to process the image and generate the text prompt
        const response = await axios.post('/api/generate', formData);
  
        const description = response.data.description;
  
        // Display the generated description
        setDescription(description);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
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
        <header className="flex flex-row justify-between fixed top-0 z-50 w-full p-4 sm:p-8 bg-[#080808] items-center">
          <Link href="/">
            <Image
                className="ml-4 w-24 sm:w-32 object-contain"
                alt="Audex Logo"
                src="/mainLogo.png"
                width={140}
                height={50}
            />
          </Link>    
          
          <div className="flex flex-row gap-5 sm:gap-20 mr-2 sm:mr-40 items-center">
            <Link href="/" className='hover:text-primary'>
              Home
            </Link>
            <Link href="/generate" className='hover:border-secondary border-primary border-2 rounded-3xl px-4 py-1 align-middle'>
              Try Audex
            </Link>
          </div>
        </header>
        <div className="flex flex-col justify-items-center w-full sm:w-3/5 mt-24 sm:mt-28">
          <div className='flex flex-col text-center justify-items-center'>
            <div className='text-3xl sm:text-3xl p-8 sm:p-8 font-medium'>
              Upload an image
            </div>
            <div className='flex justify-center'>
              <div className='text-base sm:text-lg pb-8 w-11/12 sm:w-10/12 text-sub p-2 sm:p-8'>
                Images of popular tourist destinations produces the best experience. Try taking a photo and uploading it here!
              </div>
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
              </div>
            
            
          </div>

          <div className="flex flex-col m-4 p-8 text-center">
            <div id="generatedText" className='text-justify'>
              {/* Your generated text */}
            </div>
            <audio ref={audioRef} src='/media/output.mp3'/>

            {/* {audioUrl && (
              <audio controls>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )} */}

            <div className="flex justify-center">
              <div className="max-w-min flex items-center">
                <button onClick={play} className="inline-flex items-center py-4 px-8 rounded-full border-2 border-primary hover:border-secondary text-center tracking-wider text-xl sm:text-2xl">
                  <MdOutlinePlayCircle className="mr-2" />
                  Play
                </button>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      <footer className='flex flex-col justify-center overflow-x-hidden'>
        <div className='text-base sm:text-xl p-8 sm:p-8 font-light text-center italic text-sub mt-20 tracking-wider'>
          Breathe the Moment • Feel the World • Live the Experience 
        </div>

        <Image
          className="w-fit object-contain mt-32"
          alt="Audex Logo"
          src="/12.png"
          width={500}
          height={500}
          unoptimized
        />
      </footer>
    </div>
    
  );
}