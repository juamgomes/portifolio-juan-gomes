import { IoLogoGithub, IoMdLink } from "react-icons/io"
import Image from "next/image"
export function Projects(){
  return(
    <div> 
      <h1 className="text-branco text-center mb-10 font-semibold text-xl">Projetos</h1>
      <div className="grid grid-cols-1 gap-10 place-items-center">
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 p-4 w-3/4 h-auto rounded-xl bg-zinc-800">
          <Image src="/Spotify-img.JPG" width={488} height={288} className="rounded-xl" alt="Print da tela do Spotify"/>
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-2 text-4xl font-semibold">Interface do Spotify</h1>
            <span className="text-zinc-600 font-semibold">Next - Tailwind - React</span>
            <p className="sm:flex text-zinc-500 hidden">Clone da interface do spotify.</p>
            <div className="flex gap-4">
                <a href="https://github.com/juamgomes/spotify-interface" target="_blank">
                  <IoLogoGithub size={30} className="text-branco mt-10"/>
                </a>

                <a href="https://spotify-interface-gamma.vercel.app/" target="_blank">
                  <IoMdLink size={30} className="text-branco mt-10"/>
                </a>
              
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 p-4 w-3/4 h-auto rounded-xl bg-zinc-800">
        <Image src="/Sistema-de-controle-financeiro-img.JPG" width={488} height={288} className="rounded-xl" alt="Print da tela do sistema de controle financeiro"/>
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-2 text-4xl font-semibold">Controle financeiro</h1>
            <span className="text-zinc-600 font-semibold">React - JS - StylesComponents</span>
            <p className="sm:flex text-zinc-500 hidden">Sistema de controle financeiro que registra as entradas e saídas de um valor inicial, subtrai e mostra o total. Para fazer um planejamento financeiro.</p>
            <div className="flex gap-4">
              <a href="https://github.com/juamgomes/controle-financeiro" target="_blank">
                <IoLogoGithub size={30} className="text-branco mt-10"/>
              </a>
              <a href="https://controle-financeiro-eosin.vercel.app/" target="_blank">
                <IoMdLink size={30} className="text-branco mt-10"/>
              </a>
            </div>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 p-4 w-3/4 h-auto rounded-xl bg-zinc-800">
        <Image src="/Lista-de-tarefas-img.JPG" width={488} height={288} className="rounded-xl" alt="Print da tela da lista de tarefas"/>
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-2 text-4xl font-semibold">Lista de tarefas</h1>
            <span className="text-zinc-600 font-semibold">React - JS - Tailwindcss</span>
            <p className="text-zinc-500 sm:flex hidden">Lista de tarefas, para organizar e planejar as taerefas do dia a dia.</p>
            <div className="flex gap-4">
              <a href="https://github.com/juamgomes/Lista-de-tarefas" target="_blank">
                <IoLogoGithub size={30} className="text-branco mt-10"/>
              </a>
              <a href="https://lista-de-tarefas-mu-dusky.vercel.app/" target="_blank">
                <IoMdLink size={30} className="text-branco mt-10"/>
              </a>
            </div>
          </div>
        </div>
        
          <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 p-4 w-3/4 h-auto rounded-xl bg-zinc-800">
          <Image src="/Relogio-digital-img.jpg" width={488} height={288} className="rounded-xl" alt="Relógio digital"/>
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-2 text-4xl font-semibold">Relógio digital</h1>
            <span className="text-zinc-600 font-semibold">HTML - CSS - JS</span>
            <p className="sm:flex text-zinc-500 hidden">Rélogio digital simples.</p>
            <div className="flex gap-4">
              <a href="https://github.com/juamgomes/relogio-digital" target="_blank">
                <IoLogoGithub size={30} className="text-branco mt-10"/>
              </a>
              <a href="https://juamgomes.github.io/relogio-digital/" target="_blank">
                <IoMdLink size={30} className="text-branco mt-10"/>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 p-4 w-3/4 h-auto rounded-xl bg-zinc-800">
          <Image src="/Conversor-de-temperatura-img.JPG" width={488} height={288} className="rounded-xl" alt="Conversor de temperatura"/>
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-2 text-4xl font-semibold">Conversor de temperatura</h1>
            <span className="text-zinc-600 font-semibold">HTML - CSS - JS</span>
            <p className="sm:flex text-zinc-500 hidden">Conversor de temperaturas conversão entre °C e °F, conversão entre °F e °C, conversão entre °F e K, conversão entre K e °F conversão entre °C e K e conversão entre K e °C.</p>
            <div className="flex gap-4">
              <a href="https://github.com/juamgomes/Conversor-de-temperaturas" target="_blank">
                <IoLogoGithub size={30} className="text-branco mt-10"/>
              </a>
              <a href="https://juamgomes.github.io/Conversor-de-temperaturas/" target="_blank">
                <IoMdLink size={30} className="text-branco mt-10"/>
              </a>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}