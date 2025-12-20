import AboutSection from '../features/about/AboutSection'
import FooterSection from '../features/footer/FooterSection'
import Header from '../features/header/Header'
import MainSection from '../features/mainSection/MainSection'
import ProjectsSection from '../features/projects/ProjectsSection'

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