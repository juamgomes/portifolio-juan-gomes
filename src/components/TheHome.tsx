import Image from "next/image"

export function TheHome(){
  return(
    <div className="text-branco mx-36 bg-zinc-main sm:py-11 sm:px-28 px-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex-col mt-28 sm:mr-16 w-3/6">
        <p className="text-3xl">Olá, eu sou</p>
        <h1 className="sm:text-7xl text-5xl font-semibold my-5">Juan Gomes</h1>
        <h2 className="text-3xl mb-10 font-semibold text-blue-2">Desenvolvedor</h2>
        <p className="text-justify text-zinc-500">Olá, meu nome é Juan Gomes, sou estudante de 
        Engenharia da Computação e um jovem entusiasta da tecnologia. Com experiência em suporte e 
        desenvolvimento de software, estou sempre procurando novos desafios para aprimorar minhas 
        habilidades e evoluir cada vez mais como DEV. Ao longo de minha carreira, adquiri habilidades 
        sólidas em várias linguagens de programação e frameworks, incluindo Python, Java Script, C++, React e Vue. 
        </p>

      </div>

      <div className="w-3/6">
        <Image src="/Dev animation.gif" width={700} height={700} alt="Imagem de computador"/>
      </div>
    </div>
  )
}
