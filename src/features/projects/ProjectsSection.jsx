import ProjectCard from "../../components/ProjectCard";
import microsysImg from "../../assets/microsys.png";
import senacFoodImg from "../../assets/senacFood.png";
import sportFinder from "../../assets/sportFinder.png";
import ricardinhoMotos from "../../assets/ricardinhoMotos.png";

function ProjectsSection() {
  return (
    <div className="bg-[#374B22] text-[#EDECED] py-4">
      <div
        className="my-10 mx-6 
    lg:px-30 lg:py-10"
      >
        <div className="flex gap-6">
          <h1 className="text-3xl font-bold mb-6 lg:text-5xl" id="projetos">Projetos</h1>
        </div>
        <div className="flex flex-col gap-6
        lg:grid lg:grid-cols-2
        ">
          <ProjectCard
            srcImg={microsysImg}
            alt={"Projeto MicroSys"}
            title={"MicroSys"}
            href={"https://github.com/MiguelMartini/microsys"}
          />
          <ProjectCard
            srcImg={senacFoodImg}
            alt={"Projeto SenacFood"}
            title={"SenacFood"}
            href={"https://github.com/MiguelMartini/senacFoodBackend"}
          />
          <ProjectCard
            srcImg={sportFinder}
            alt={"Projeto SportFinder"}
            title={"SportFinder"}
            href={"https://github.com/MiguelMartini/SportFinderFront"}
          />
          <ProjectCard
            srcImg={ricardinhoMotos}
            alt={"Projeto Ricardinho Motos"}
            title={"Ricardinho Motos"}
            href={"https://github.com/MiguelMartini/RicardinhoMotos"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
