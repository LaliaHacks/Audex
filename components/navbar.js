import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
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
      
      <div className="font-medium text-xl flex flex-row gap-5 sm:gap-20 mr-2 sm:mr-40">
        <Link block color="error" href="/landing">
          Home
        </Link>
        <Link block color="error" href="/generate">
          Try Audex
        </Link>
      </div>
    </header>
  );
};

export default Navbar;