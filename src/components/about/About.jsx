export default function About() {
  return (
    <section className="text-center">
      <h2 id="about" className="text-[45px] font-bold">Sobre Mi</h2>
      <div className="flex flex-col text-left px-4 pt-14 text-yellow-50">
        <p className="text-lg md:px-44" >
          Vivo en Córdoba Capital, Argentina. Soy papá de una hermosa niña y
          estoy felizmente casado hace ya 7 años. Amo el desarrollo web y
          aprender continuamente, pero no solo me vuelco al mundo IT sino que
          disfruto mucho de la lectura y en especial en libros de papel. En mi
          vida he transitado por muchos cambios, siempre adaptándome al entorno
          y proponiéndome nuevos desafíos; he pasado de la enseñanza en Nivel
          Medio, Teología, Psicología e incluso una verdulería propia! Y todo
          esto me ha enseñado valores inmensos, a respetar y valorar las
          opiniones de los otros, a trabajar en equipo para llegar más lejos y a
          no bajar los brazos nunca.
        </p>
      </div>
      <div className="text-white py-14 flex justify-around text-[15px] underline underline-offset-4 md:text-[10px] md:justify-center md:gap-x-8">
        <a href="/CV BuccoliniJuan_ES_2024.pdf" download='CV BuccoliniJuan_ES_2024.pdf'>CURRICULUM</a>
        <a href="https://www.linkedin.com/in/juan-mateo-buccolini/" target="_blank">LINKEDIN</a>
        <a href="https://github.com/JMBuccolini" target="_blank">REPO</a>
        <a href="mailto:juanmateobuccolini@gmail.com" target="_blank" >MAIL</a>
      </div>
    </section>
  );
}
