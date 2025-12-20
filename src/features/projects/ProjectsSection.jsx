import ProjectCard from "../../components/ProjectCard"
import microsysImg from "../../assets/microsys.png";
import senacFoodImg from "../../assets/senacFood.png";
import sportFinder from "../../assets/sportFinder.png";
import ricardinhoMotos from "../../assets/ricardinhoMotos.png";




function ProjectsSection() {
  return (
    <div className='bg-[#374B22] text-[#EDECED]'>
      <div className='mx-6 py-10 flex flex-col gap-6'>
        <h1 className='text-3xl font-bold mb-6'>Projetos</h1>
        <ProjectCard srcImg={microsysImg} alt={"Projeto MicroSys"} title={"MicroSys"}/>
        <ProjectCard srcImg={senacFoodImg} alt={"Projeto SenacFood"} title={"SenacFood"}/>
        <ProjectCard srcImg={sportFinder} alt={"Projeto SportFinder"} title={"SportFinder"}/>
        <ProjectCard srcImg={ricardinhoMotos} alt={"Projeto Ricardinho Motos"} title={"Ricardinho Motos"}/>
      </div>
    </div>
  )
}

export default ProjectsSection