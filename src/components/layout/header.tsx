import { NavPrimary } from "./navPrimary";
import Randy from '@/assets/images/randy.png'
import Image from "next/image";
import Link from "next/link";
import { Emphasis } from "../graphics/emphasis";
import social from '@/data/social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    
      <header className="px-8 py-4 md:px-16 md:py-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-8 z-40 mb-8 md:mb-16">
        <Link href="/" className="flex flex-row no-wrap gap-1 items-center w-max">
          <Image
            src={Randy}
            alt="Randy"
            className="w-16 h-16 top-[6px] relative -ml-[0.7rem]"
          />
          <div>
            <h1 className="uppercase text-xl md:text-2xl font-bold">
              <span>
                <Emphasis className="w-24 h-6 text-blue-600" />
                Amazing{' '}
              </span>
              Rando
            </h1>
          </div>
        </Link> 
        <div className="flex flex-col gap-4 md:flex-col-reverse lg:flex-row lg:gap-8 lg:items-center">
          <NavPrimary className="" />
          <div className="hidden md:flex flex-row gap-2 md:gap-4 justify-end">
            {social.map((item) => (
              <a 
              href={item.url} 
              key={item.label}
              className="hover:text-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </header>
  );
};

export default Header;