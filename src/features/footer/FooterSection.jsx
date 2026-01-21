import React from 'react'
import LinkBtn from '../../components/LinkBtn'

function FooterSection() {
  return (
    <div className='bg-[#EDECED] py-10 px-6 
    lg:px-30 lg:py-20'>
      <div>
        <h1 className='text-3xl font-bold mb-6 text-[#374B22] 
            lg:text-5xl' id='contato'>Contato</h1>
      </div>
      <div>
        <p className='text-base
           leading-relaxed
           text-justify lg:text-lg'>Deseja falar comigo? Por motivos de privacidade e segurança entre em
            contato comigo através do meu
            <a href="https://www.linkedin.com/in/miguelkmartini-ti/#" target="_blank" className='text-blue-500 underline'> Linkedin</a>!</p>
      </div>
      <div className="flex flex-row justify-center gap-4 my-10">
        <LinkBtn
          link={"https://www.linkedin.com/in/miguelkmartini-ti/"}
          name={"Linkedin"}
        />
        <LinkBtn link={"https://github.com/MiguelMartini"} name={"GitHub"} />
      </div>
      <div className='flex justify-center text-center text-sm mt-20'>
        <p className='text-[#4d4d69]'>© 2025 Miguel Kauling Martini. Todos os direitos reservados. Proibida a reprodução, distribuição ou qualquer outra forma de utilização sem autorização prévia.</p>
      </div>
    </div>
  )
}

export default FooterSection