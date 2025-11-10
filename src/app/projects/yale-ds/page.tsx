import yaleDSTypography from '@/assets/images/yaleDSTypography.svg'
import Image from 'next/image'
import yaleImage from '@/assets/images/harkness-memorial-gate-close-up.jpg'
import phone from '@/assets/images/sacred-mockuuups-google-pixel-4-mockup-front-view-floor-shadow.png'
import students from '@/assets/images/2016-02-01_14-44-33_DSC_4374-458819837.jpg'
import yssites from '@/assets/images/projects/ys-sites.png';
import ysImage1 from '@/assets/images/projects/ys-mockuuups-angle-view-mockup-of-office-workplace.jpeg'
import ysImage2 from '@/assets/images/projects/ys-mockuuups-iphone-15-pro-mockup-in-male-hand-against-neutral-background.png'
import ysImage3 from '@/assets/images/projects/ys-mockuuups-macbook-pro-mockup-with-a-woman-relaxing-on-a-chair.jpeg'
import ysImage4 from '@/assets/images/projects/ys-Footer.png'
import ysImage5 from '@/assets/images/projects/ys-Custom Cards.png'
import ysImage6 from '@/assets/images/projects/ys-typography.png'
import YouTubeEmbed from '@/components/ui/youtubeEmbed'

export default async function Page() {
  return (
    <div>
      <div className="relative isolate">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:pb-32 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <div className="bg-white/50 font-medium text-ash-900 rounded-full inline-block px-3 py-1 text-base/6 ring-1 ring-primary-sky/40 mb-4">
                  <a href="https://www.linkedin.com/posts/getpantheon_drupalconatlanta-activity-7310710693060628481-QQjR">⚡ 2025 Pantheon Partner Summit Award Winner</a>
                </div>
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-ash-900 sm:text-7xl">
                  All new Yale sites use the design system I established
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-ash-600 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                  Yale has more than a thousand websites, and now, with its first digital design system, it can keep them all on brand.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://yalesites.yale.edu"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-2xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    Visit YaleSites
                  </a>
                  <a href="https://yalesites-org.github.io/component-library-twig/?path=/story/config--global-config" className="text-sm/6 font-semibold text-gray-900">
                    Storybook <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                  <div className="relative">
                    <Image src={yaleImage} alt="Yale" className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image src={students} alt="Students" className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div className="relative bg-[#00356b] aspect-3/4 h-[200px] rounded-xl ring-1 ring-gray-900/10 ring-inset text-white flex flex-col items-start justify-end p-4">
                    <p className="text-lg font-medium block w-full">Yale Blue</p>
                    <p className="text-sm block w-full">
                      #00356b
                    </p>
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 md:pt-32 sm:pt-0">
                  <div className="relative bg-white rounded-xl ring-1 ring-gray-900/10 ring-inset text-ash-700 flex flex-col items-start justify-end p-4">
                    <Image src={yaleDSTypography} alt="Yale Design System Typography" className='block' />
                    <p className="text-sm block w-full mt-2">
                      Typography
                    </p>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div className="relative">
                    <Image src={phone} alt="Phone" className="aspect-2/3 w-full rounded-xl object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

      <div className="bg-white p-4 pt-8 lg:p-16">
        <YouTubeEmbed embedId="7RP6iUCdOKY"/>
      </div>

      <div className="bg-white p-4 pt-8 lg:p-16">

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative">
          <main className="prose lg:prose-lg prose-headings:font-semibold prose-strong:text-slate-600 prose-headings:text-slate-700 prose-li:marker:text-slate-600 pb-16 lg:sticky lg:top-16 self-start">
            <h2>Unifying Yale’s Digital Presence with a Thoughtfully Crafted Design System</h2>
            <p className='lead'>I led the team as the Creative Director, working alongside a UI designer and a frontend engineer from my team at Four Kitchens while teaming up with a UX designer and an accessibility expert from Yale.</p>
            <p>A design system was born, and it delivered the following:</p>
            <ul>
            <li><strong>A suite of design tokens</strong> that define Yale&#39;s digital brand and provide flexibility for future digital projects—web, react, iOS, etc.</li>
            <li><strong>A library of adaptable and customizable components</strong> is available in their CMS. Each component was thoroughly accessibility tested with automated tooling and direct user testing with people with disabilities.</li>
            <li><strong>A theming system that gives users choices</strong> in how their site looks while maintaining Yale&#39;s brand. Giving users the ability to choose how their school or department site looks has increased the adoption of Yale&#39;s centralized site service.</li>
            </ul>
          </main>
          <Image src={yssites} alt="YaleSites homepage" className='border border-ash-200' />
        </div>
        </div>
        
        

        <div className='grid grid-cols-2 grid-rows-4 max-h-screen'>
          <Image src={ysImage2} alt="YaleSites homepage" className='row-span-2 object-cover w-full h-full' />
          
          <div className='bg-[#f6f6f6]'>
            <Image src={ysImage6} alt="YaleSites homepage" className='object-contain w-full h-full' />
          </div>
          
          <Image src={ysImage3} alt="YaleSites homepage" className='object-cover w-full h-full' />
          <div className='bg-[#f6f6f6]'>
            <Image src={ysImage5} alt="YaleSites homepage" className='object-contain w-full h-full' />
          </div>
          <div className='bg-[#f6f6f6] row-span-2'>
            <Image src={ysImage4} alt="YaleSites homepage" className='object-contain w-full h-full' />
          </div>
          <Image src={ysImage1} alt="YaleSites homepage" className='object-cover w-full h-full' />
        </div>

        
        
          
        
      

      
  </div>
  )
}