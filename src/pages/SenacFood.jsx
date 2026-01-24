import React from 'react'
import Header from '../features/Layout/header/Header'
import FooterSection from '../features/Layout/footer/FooterSection'
import CarouselSection from '../features/Projects/Carousel/CarouselSection'
import About from '@/features/Projects/ProjectAbout/About'

import senacFood from "../assets/senacFood.png";
import senacFood2 from "../assets/microsys.png";
import Dev from '@/features/Projects/Dev/Dev'

const imgs = [
  senacFood,
  senacFood2
]

const texts = [
  "A proposta deste projeto será entregar um aplicativo de receitas culinárias, possibilitando ao usuário encontrar receitas adaptadas ao seu dia a dia, aos ingredientes que possui em casa e o seu nível de experiência.",

  "O aplicativo contará com um design fluído, responsivo e funcional, com o objetivo de incentivar à diversificação alimentar e estímulo alimentar que é crucial para evitar carências nutricionais. Atendendo àqueles que procuram por praticidade ou quanto quem busca por novas experiências e deseja reduzir o desperdício alimentar.",
  
  "O uso de agentes de IA para sugerir receitas personalizadas baseadas nas receitas e ingredientes já cadastrados."
]

const techs = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg"
]

function SenacFood() {
  return (
    <div className='bg-[#EDECED]'>
      <Header/>
      <CarouselSection title={"SenacFood"} imgs={imgs}/>
      <About texts={texts}/>
      <Dev title={"Desenvolvimento"} text={"Fui responsável por desenvolver o Backend da aplicação, onde fiz levantamentos de requisitos, modelo relacional de banco de dados, integração com modelos de inteligência Artificial e testes manuais da aplicação."} techs={"Tecnologias utilizadas: PHP, Laravel, MySQL, Git, GitHub, Insomnia"} techIcons={techs}/>
      <FooterSection/>
    </div>
  )
}

export default SenacFood