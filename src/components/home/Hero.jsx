import { FaArrowRightLong } from "react-icons/fa6";


export default function Hero() {
  return (
    <main className="text-black container mx-auto px-8 text-3xl relative">
      <div className="flex flex-col items-left text-[50px]">
        <div className="flex flex-col gap-y-14">
          <p className="animate-fade-up">¡Hola!</p>
          <p className="flex flex-col gap-y-4 text-[45px] text-yellow-50 animate-fade-up animate-delay-200">
            Soy Juan M. <span>Buccolini</span>
          </p>
        </div>
        <p className="flex flex-col gap-y-8 pt-20 animate-fade-up animate-delay-300">
          FullStack <span>Developer</span> <span className="text-[25px]">MERN</span>
        </p>
      </div>
      <img src="/perfil.jpg" width={500} height={500} className=" hidden md:block md:absolute md:top-0 md:right-4 md:rounded-md md:shadow-slate-200 " />
      <div className="flex flex-col pt-24 text-yellow-50 pb-20">
        <a href="#about" className="flex justify-left items-center gap-x-4 animate-fade-right animate-delay-700"><FaArrowRightLong />Conocé más de mi</a> <br />
        <a href="#proyectos" className="flex justify-left items-center gap-x-4 animate-fade-right animate-delay-1000 "><FaArrowRightLong />Proyectos</a>
      </div>
    </main>
  );
}
