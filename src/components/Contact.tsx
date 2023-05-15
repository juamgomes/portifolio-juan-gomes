import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io"

export function Contact(){
  return(
    <div className="flex-col p-10">
      <h1 className="text-branco text-xl font-semibold flex justify-center mb-10">Contato</h1>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-6">
        <a href="https://github.com/juamgomes" target="_blank" className="border mb-5 flex justify-center gap-2 text-branco font-medium border-branco hover:bg-white hover:text-black transition-colors rounded px-6 py-1 sm:px-24 sm:py-1">< IoLogoGithub size={25} /><span>Github</span></a>
        <a href="https://www.linkedin.com/in/juan-martins-gomes-a5ab21212/" target="_blank" className="border mb-5 flex justify-center gap-2 text-branco font-medium border-branco hover:bg-white hover:text-black transition-colors rounded px-6 py-1 sm:px-24 sm:py-1">< IoLogoLinkedin size={25}/><span>LikedIn</span></a>
        <a href="mailto:juanmartinsgmess@gmail.com" target="_blank" className="border mb-5 flex justify-center gap-2 text-branco font-medium border-branco hover:bg-white hover:text-black transition-colors rounded px-6 py-1 sm:px-24 sm:py-1">< IoMdMail size={25}/><span>E-mail</span></a>
      </div>
    </div>
  )
}
