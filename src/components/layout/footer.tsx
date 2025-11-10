import social from '@/data/social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-blue-1000 text-blue-300 px-8 py-4 md:px-16 md:py-8">
      <div className='flex flex-row gap-4 justify-between items-center max-w-8xl mx-auto'>
        <div className='text-lg'><span className="font-semibold text-blue-100">Randy Oest</span> is Amazing Rando. <div className="invisible h-px">
          <a rel="me" href="https://dice.camp/@amazingrando">Mastodon</a>
        </div></div>
        <div className="flex flex-row gap-4">
          {social.map((item) => (
            <a
              href={item.url}
              key={item.label}
              className="hover:text-blue-100 transition-colors"
            >
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;