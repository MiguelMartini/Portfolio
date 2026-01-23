import AboutSection from '../features/home/about/AboutSection'
import FooterSection from '../features/home/footer/FooterSection'
import Header from '../features/home/header/Header'
import MainSection from '../features/home/mainSection/MainSection'
import ProjectsSection from '../features/home/projects/ProjectsSection'

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