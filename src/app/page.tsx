import { TheHome } from '@/components/TheHome';
import { Contact } from '@/components/Contact';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { TheFooter } from '@/components/TheFooter';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="bg-zinc-main text-white flex flex-col sm:flex-row justify-between py-4 sm:py-6 px-4 sm:px-28 items-center">
      <div><Image className="cursor-pointer" src="/Logo-Juan.svg" alt="Logo com o nome Juan" width={130} height={130}/></div>
      <ol className="flex gap-4 sm:gap-6 text-sm sm:text-base items-center mt-4 sm:mt-0">
        <Link href="#TheHome">
          <li><a>Sobre</a></li>
        </Link>
        <Link href="#Projects">
          <li><a>Projetos</a></li>
        </Link>
        <li><a className="bg-blue text-black hover:text-blue hover:bg-black transition-colors cursor-pointer font-semibold py-2 px-6 sm:px-9 rounded-full" href="https://www.linkedin.com/in/juan-martins-gomes-a5ab21212/" target="_blank">Vamos nos conectar</a></li>
      </ol>
    </div>
      <div id='TheHome'>
        <TheHome />
      </div>
      <Contact />
      <div id='Projects'>
        <Projects />
      </div>
      <Skills />
      <TheFooter />
    </main>
  )
}
