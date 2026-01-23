import DevIcon from "../../../components/DevIcon";
import LinkBtn from "../../../components/LinkBtn";

function MainSection() {
  return (
    <div className="bg-[#EDECED] pt-6 pb-10 flex flex-col gap-6">
      <div
        className="flex flex-col     
      lg:justify-between lg:mt-16
      "
      >
        <div className="flex flex-col items-start p-6 lg:ml-30">
          <h1
            className="text-4xl font-bold mb-6 text-[#374B22]
          lg:text-7xl"
          >
            Miguel Kauling Martini
          </h1>
          <div className="flex flex-col pl-2 lg:text-2xl lg:pl-10">
            <ul className="list-disc">
              <li className="font-medium text-[#374B22]">
                Analista e Desenvolvedor de Sistemas Web
              </li>
              <li className=" font-medium text-[#374B22]">
                Estudante de Ciência da Computação
              </li>
            </ul>
          </div>
        </div>
        <div
          className="inset-shadow-sm inset-shadow-neutral-500/50 bg-neutral-300 rounded-xl m-4 p-4 lg:px-20
          max-w-xl mx-auto"
        >
          <p className="text-[#374B22] font-semibold pb-4 lg:text-2xl">
            Tecnologias
          </p>
          <div className="grid grid-cols-4 gap-4 place-items-center lg:grid-cols-6">
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
              }
              alt={"icone-php"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
              }
              alt={"icone-laravel"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              }
              alt={"icone-react"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              }
              alt={"icone-typescript"}
            />

            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              }
              alt={"icone-html5"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              }
              alt={"icone-css3"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              }
              alt={"icone-tailwindcss"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              }
              alt={"icone-javascript"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              }
              alt={"icone-postgresql"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              }
              alt={"icone-mysql"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              }
              alt={"icone-git"}
            />
            <DevIcon
              link={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              }
              alt={"icone-github"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <LinkBtn
          link={"https://www.linkedin.com/in/miguelkmartini-ti/"}
          name={"Linkedin"}
        />
        <LinkBtn link={"https://github.com/MiguelMartini"} name={"GitHub"} />
      </div>
    </div>
  );
}

export default MainSection;
