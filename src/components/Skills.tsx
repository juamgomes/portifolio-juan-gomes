import { DiGit, DiReact, DiNodejs, DiPython, DiHtml5, DiCss3, DiJavascript, DiVisualstudio } from "react-icons/di"

export function Skills(){
  return(
    <div>
      <h1 className="text-branco text-center mb-10 font-semibold text-xl mt-10">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:mx-96 mx-2 mt-10 gap-4 place-content-center p-4">
        <div className="border-2 border-zinc-400 flex items-center justify-center rounded-lg p-2">
          <DiGit className="text-red-600" size={50}/>
          <span className="text-branco">Git</span>
        </div>
        <div className="border-2 border-zinc-400 flex items-center justify-center rounded-lg">
          <DiJavascript className="text-yellow-500" size={50}/>
          <span className="text-branco">JavaScript</span>
        </div>
        <div className="border-2 border-zinc-400 flex items-center justify-center rounded-lg">
          <DiReact className="text-blue" size={50}/>
          <span className="text-branco">React</span>
        </div>

        <div className="border-2 gap-2 border-zinc-400 flex items-center justify-center rounded-lg">  
        <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
           <span className="text-branco">NextJS</span>
        </div>

        <div className="border-2 gap-2 border-zinc-400 flex items-center justify-center rounded-lg">  
        <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
           <span className="text-branco">VueJS</span>
        </div>

        <div className="border-2 border-zinc-400 gap-2 flex items-center justify-center rounded-lg p-2">
          <DiNodejs className="text-green-500" size={50}/>
          <span className="text-branco">Node</span>
        </div>
        <div className="border-2 border-zinc-400 flex items-center justify-center rounded-lg p-2">
          <DiPython className="text-yellow-500" size={50}/>
          <span className="text-branco">Python</span>
        </div>
        <div className="border-2 border-zinc-400 flex items-center justify-center rounded-lg">
          <DiHtml5 className="text-red-500" size={50}/>
          <span className="text-branco">HTML5</span>
        </div>
        <div className="border-2 border-zinc-400 flex items-center justify-center rounded-lg">
          <DiCss3 className="text-blue" size={50}/>
          <span className="text-branco">css3</span>
        </div>

        <div className="border-2 gap-2 border-zinc-400 flex items-center justify-center rounded-lg">  
        <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
           <span className="text-branco">Tailwindcss</span>
        </div>
        
        <div className="border-2 border-zinc-400 flex items-center justify-center rounded-lg p-2">
          <DiVisualstudio className="text-blue" size={50}/>
          <span className="text-branco">VisualStudio</span>
        </div>

        <div className="border-2 gap-2 border-zinc-400 flex items-center justify-center rounded-lg">  
        <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
           <span className="text-branco">Figma</span>
        </div>
      </div>
    </div>
  )
}