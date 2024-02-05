import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        <strong>Welcome to Acme.</strong> This is the example for the{' '}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>
        , brought to you by Vercel.
      </p>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/vercel.svg"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project"
        />
      </div>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/next.svg"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshot of the dashboard project"
        />
      </div>
    </div>
  );
}