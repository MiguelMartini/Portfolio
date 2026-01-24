import AboutSection from '../features/home/about/AboutSection'


import MainSection from '../features/Home/mainSection/MainSection'
import ProjectsSection from '../features/Home/projects/ProjectsSection'
import FooterSection from '../features/Layout/footer/FooterSection'
import Header from '../features/Layout/header/Header'

function Home() {
  return (
    <div>
        <Header/>
        <MainSection/>
        <AboutSection/>
        <ProjectsSection/>
        <FooterSection/>
    </div>
  )
}

export default Home