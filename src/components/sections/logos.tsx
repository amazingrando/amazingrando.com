import Image from 'next/image';
import { logos } from '@/data/logos';

export default function Logos() {
  return (
    <div className="bg-ash-100 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {logos.map((logo) => (
            <div key={logo.name} className={`relative h-12 object-contain ${logo.colSpan} ${logo.rowSpan}`}>
              <Image
                alt={logo.name}
                src={logo.logo}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
