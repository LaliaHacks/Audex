import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import placeholder from '../public/placeholder.jpg';
import Link from 'next/link';

export default function Generate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleCameraCapture = async () => {
    
  };

  return (
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
        
        <div className="flex flex-row gap-5 sm:gap-20 mr-2 sm:mr-40">
          <Link href="/landing" className='hover:text-primary'>
            Home
          </Link>
          <Link href="/generate" className='hover:text-primary'>
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
    </div>
  );
}