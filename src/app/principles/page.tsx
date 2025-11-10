import { principles } from '@/data/principles';
import clsx from 'clsx';
export default async function Principles() {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-8 lg:px-16">
      <header className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-balance">
          Principles
        </h1>
        <h2 className="text-2xl text-ash-700 text-balance mb-8 font-medium">
          If you don&apos;t know what you stand for, you&apos;ll fall for
          anything.
        </h2>
      </header>

      <main className="prose lg:prose-lg max-w-none prose-headings:font-semibold prose-strong:text-slate-600 prose-headings:text-slate-700 prose-li:marker:text-slate-600 mt-24 lg:mt-44 pb-44">
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-4 lg:grid-rows-3 relative lg:w-[125%] lg:-ml-[12.5%] not-prose">
          {principles.map((principle, index) => (
            <li 
              key={index}
              className={clsx(
                "bg-yellow-100 py-6 px-10",
                "relative flex h-full flex-col overflow-hidden justify-center",
                "rounded-sm",
                "font-semibold text-balance text-yellow-900",
                "inset-px rounded-lg ring-1 shadow-xs ring-yellow-700",
                principle.textSize === 'sm' ? "text-sm" : "",
                principle.textSize === 'base' ? "text-base" : "",
                principle.textSize === 'lg' ? "text-lg" : "",
                principle.textSize === 'xl' ? "text-xl" : "",
                principle.textSize === '2xl' ? "text-2xl" : "",
                principle.textSize === '3xl' ? "text-3xl" : "",
                principle.textSize === null ? "text-2xl" : "",
                principle.colspan === 1 ? "lg:col-span-1" : "",
                principle.colspan === 2 ? "lg:col-span-2" : "",
                principle.colspan === 3 ? "lg:col-span-3" : "",
                principle.rowspan === 1 ? "lg:row-span-1" : "",
                principle.rowspan === 2 ? "lg:row-span-2" : "",
                principle.rowspan === 3 ? "lg:row-span-3" : "",
              )}
            >
              {principle.text}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}