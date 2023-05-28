import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import placeholder from '../public/placeholder.jpg';

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
      <div className="border-2 w-full p-4">Fake Navbar</div>
      <div className="flex flex-col justify-items-center w-full sm:w-3/5">
        <div className="flex flex-col border-2 m-4 p-8">
          <div className="text-3xl font-medium pb-8">
            Maximize Your Productivity
          </div>
          <div className="font-inter">
            This is just some sample text lorem ipsum stuff
          </div>
        </div>
        <div className="flex flex-col border-2 m-4 p-6 items-center">
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
                    className='w-full sm:w-1/2'
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