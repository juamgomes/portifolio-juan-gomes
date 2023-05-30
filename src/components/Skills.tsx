'use client';
import { motion } from "framer-motion"

const parent = {
  variantA: { scale: 1 },
  variantB: { scale: 1.1 }
}

const skillsData = [
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'VueJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwindcss', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'VisuaStudio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
];

export function Skills(){

  const mountCards = () => {
    return skillsData.map((skill) => (
      <motion.div key={skill.name} variants={parent} initial="variantA" whileHover="variantB" 
      className="border-2 hover:border-none border-zinc-400 flex cursor-pointer hover:bg-blue-2 font-semibold dark:text-branco hover:text-black items-center justify-center gap-2 rounded-lg p-2">
        <img className="w-9" src={skill.logo} />
        <span>{skill.name}</span>
      </motion.div>
    ));
  };


  return(
    <div className="rounded-xl w-3/4 p-10 mt-10 m-auto">
      <h1 className="dark:text-branco text-center font-semibold text-xl mb-6">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-content-center">
        
        {mountCards()}

      </div>
    </div>
  )
}