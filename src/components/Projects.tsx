import { IoLogoGithub, IoMdLink } from "react-icons/io"
import Image from "next/image"



export function Projects(){

  const  myProjectsData = [
    {image: '/Spotify-img.JPG', 
    name: 'Interface do Spotify', 
    tecnologias: 'Next - Tailwind - React', 
    description: 'Clone da interface do spotify.',
    linkGit: 'https://github.com/juamgomes/spotify-interface',
    linkProject: 'https://spotify-interface-gamma.vercel.app/'},

    {image: '/Sistema-de-controle-financeiro-img.JPG', 
    name: 'Controle financeiro', 
    tecnologias: 'React - JS - StylesComponents', 
    description: 'Sistema de controle financeiro que registra as entradas e saídas de um valor inicial, subtrai e mostra o total. Para fazer um planejamento financeiro.',
    linkGit: 'https://github.com/juamgomes/controle-financeiro',
    linkProject: 'https://controle-financeiro-eosin.vercel.app/'},
    
    {image: '/Lista-de-tarefas-img.JPG', 
    name: 'Lista de tarefas', 
    tecnologias: 'React - JS - Tailwindcss', 
    description: 'Lista de tarefas, para organizar e planejar as tarefas do dia a dia.',
    linkGit: 'https://github.com/juamgomes/Lista-de-tarefas',
    linkProject: 'https://lista-de-tarefas-mu-dusky.vercel.app/'},

    {image: '/Relogio-digital-img.jpg', 
    name: 'Relógio digital', 
    tecnologias: 'HTML - CSS - JS', 
    description: 'Rélogio digital simples.',
    linkGit: 'https://github.com/juamgomes/relogio-digital',
    linkProject: 'https://juamgomes.github.io/relogio-digital/'},

    {image: '/Conversor-de-temperatura-img.JPG', 
    name: 'Conversor de temperatura', 
    tecnologias: 'HTML - CSS - JS', 
    description: 'Conversor de temperaturas conversão entre °C e °F, conversão entre °F e °C, conversão entre °F e K, conversão entre K e °F conversão entre °C e K e conversão entre K e °C.',
    linkGit: 'https://github.com/juamgomes/Conversor-de-temperaturas',
    linkProject: 'https://juamgomes.github.io/Conversor-de-temperaturas/'}
  ];

    const ProjectsCards = () => {
    return myProjectsData.map((pro) => (
      <div key={pro.name} className="flex flex-col sm:flex-row sm:gap-10 gap-6 p-4 w-3/4 h-auto rounded-xl bg-blue/10 dark:bg-zinc-800">
          <Image src={pro.image} width={488} height={288} className="rounded-xl" alt="Print da tela do Spotify"/>
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-2 text-4xl font-semibold">{pro.name}</h1>
            <span className="text-zinc-600 font-semibold">{pro.tecnologias}</span>
            <p className="sm:flex text-zinc-500 hidden">{pro.description}</p>
            <div className="flex gap-4">
                <a href={pro.linkGit} target="_blank">
                  <IoLogoGithub size={30} className="text-blue dark:text-branco mt-10"/>
                </a>

                <a href={pro.linkProject} target="_blank">
                  <IoMdLink size={30} className="text-blue dark:text-branco mt-10"/>
                </a>
              
            </div>
          </div>
        </div>
    ));
  }
  return(
    <div> 
      <h1 className="dark:text-branco text-center mb-10 font-semibold text-xl">Projetos</h1>
      <div className="grid grid-cols-1 gap-10 place-items-center">

        {ProjectsCards()}
    
      </div>
    </div>
  )
}