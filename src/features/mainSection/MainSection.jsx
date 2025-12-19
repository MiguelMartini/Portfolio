import LinkBtn from "../../components/LinkBtn"

function MainSection() {
  return (
    <div className="bg-[#EDECED] min-h-screen flex flex-col items-center justify-center gap-6">
        <div className='flex flex-col items-center'>
          <h1 className="text-3xl font-bold mb-6 text-[#374B22]">Miguel Kauling Martini</h1>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[#374B22]">Analista e Desenvolvedor de Sistemas Web</p>
             <p className="font-medium text-[#374B22]">Estudante de Ciência da Computação</p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <LinkBtn link={"https://www.linkedin.com/in/miguelkmartini-ti/"} name={"Linkedin"}/>
          <LinkBtn link={"https://www.linkedin.com/in/miguelkmartini-ti/"} name={"GitHub"}/>
        </div>
    </div>
  )
}

export default MainSection