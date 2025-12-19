import AboutSection from '../features/about/AboutSection'
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
    </div>
  )
}

export default Home