import Link from 'next/link';
import Image from 'next/image';
import ThemeMode from './ThemeMode';

export function TheHeader() {
  return (
    <header 
    id='header' 
    className="sm:fixed w-full bg-white/90 dark:bg-zinc-main/50 dark:text-white flex flex-col sm:flex-row justify-between py-4 sm:py-4 px-4 lg:md:sm:px-28 items-center gap-5"
    >
      <Image className="cursor-pointer" src="/Logo-Juan.svg" alt="Logo com o nome Juan" width={130} height={130}/>
        <ol className="flex gap-4 sm:gap-6 text-sm sm:text-base items-center mt-4 sm:mt-0">
            <Link href="#TheHome">
                <li>Sobre</li>
            </Link>
            <Link href="#Projects">
                <li>Projetos</li>
            </Link>
            <Link href="#Skills">
                <li>Skills</li>
            </Link>
        </ol>
        <a className="bg-blue text-white hover:text-black dark:text-black dark:hover:text-blue hover:bg-blue/20 dark:hover:bg-black transition-colors cursor-pointer font-normal py-2 px-2 sm:px-9 rounded-full" href="https://www.linkedin.com/in/juan-martins-gomes-a5ab21212/" target="_blank">Vamos nos conectar</a>
        <div className=''>
          <ThemeMode />
        </div>
    </header>
  )
}
