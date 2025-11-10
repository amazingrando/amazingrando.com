import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/pro-regular-svg-icons';
import { projects, smallerProjects } from '@/data/projects';
import Link from 'next/link';
import classNames from 'classnames';
import * as Fathom from 'fathom-client';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageSrc: any; // Using any since StaticImageData is not available
  url?: string;
  size?: 'default' | 'small';
  trackingName: string;
}

const ProjectCard = ({
  title,
  role,
  description,
  imageSrc,
  url = '/',
  size = 'default',
  trackingName,
}: ProjectCardProps) => (
  <article
    className="md:flex md:flex-row md:gap-8 items-start"
  >
    <Link
      href={url}
      className={classNames({
        'md:basis-[150px] ': size === 'default',
        'md:basis-[100px]': size === 'small'
      }, 'md:shrink-0 md:grow-0 float-end md:float-none ms-6 md:ms-0')}
      onClick={() => { Fathom.trackEvent(`Project link: ${trackingName}`);}}
    >
      <Image
        src={imageSrc}
        alt={title}
        className={classNames({
          'max-w-[100px] w-[100px] md:max-w-[150px]': size === 'default',
          'max-w-[70px] w-[70px] md:max-w-[100px]': size === 'small'
        }, 'md:w-full')}
      />
    </Link>

    <div>
      <h2 className={classNames({
        'text-xl md:text-2xl font-semibold mb-2 leading-tight text-balance group': size === 'default',
        'text-lg md:text-xl font-semibold mb-2 leading-tight text-balance group': size === 'small'
      })}>
        <Link href={url} className="transition-all group-hover:text-blue-200" onClick={() => { Fathom.trackEvent(`Project link: ${trackingName}`);}}>
          {title}{' '}
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="hidden! lg:block text-xl transition-all group-hover:ml-2 group-hover:text-blue-200"
          />
        </Link>
      </h2>
      <p className="text-sm text-blue-300">Role: {role}</p>
      <p className="mt-4 text-sm lg:text-base">{description}</p>
    </div>
  </article>
);

const Portfolio = () => {
  return (
    <div id="portfolio"className="px-4 sm:px-8 md:px-16 py-16 bg-linear-to-b from-blue-950 to-blue-900 text-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-6xl lg:text-7xl font-medium text-balance mb-16 bg-linear-to-r from-blue-100 to-blue-200 text-transparent bg-clip-text">
          Portfolio
        </h2>

        <div className="bg-yellow-500 flex flex-row gap-4 construction-pattern px-8 py-2 mb-16 rounded-lg">
          <p className='bg-yellow-500 px-8 py-4 rounded-lg text-black font-semibold mx-auto text-xl lg:text-2xl'>I&apos;m in the process of updating my portfolio, so there are some rough edges. Updates daily.</p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-16 lg:gap-24 mb-24">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>

        <h2 className="text-3xl font-semibold mb-12 bg-linear-to-r from-blue-100 to-blue-200 text-transparent bg-clip-text">
          Hobby projects
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12">
          {smallerProjects.map((project) => (
            <ProjectCard key={project.title} {...project} size="small" />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;