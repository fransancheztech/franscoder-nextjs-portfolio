import useLanguage from "../../hooks/useLanguage";

const educationContent = [
  {
    year: "actualidad",
    degree: "DESARROLLADOR",
    institute: "AUTODIDACTA",
    details:
      "Durante mi formación, he realizado infinidad de cursos, de los cuales los más relevantes son los siguientes:",
    courses: [
      {
        name: "Java 17 Masterclass",
        platform: "Udemy",
        year: "2024",
      },
      {
        name: "Become a WordPress Developer w/ PHP: Unlocking Power With Code",
        platform: "Udemy",
        year: "2024",
      },
      {
        name: "UiPath Foundation & Advanced Courses",
        platform: "UiPath Academy",
        year: "2023",
      },
      {
        name: "Automation Anywhere Basic",
        platform: "university.automationanywhere",
        year: "2023",
      },
      {
        name: "Power Automate Developer",
        platform: "learn.microsoft",
        year: "2023",
      },
      {
        name: "Microservices with Node JS and React",
        platform: "Udemy",
        year: "2023",
      },
      { name: "Understanding TypeScript", platform: "Udemy", year: "2023" },
      {
        name: "MERN Stack Course - MongoDB, Express, React and NodeJS",
        platform: "Udemy",
        year: "2023",
      },
      {
        name: "Build an e-commerce app with React and Chakra UI MERN [2023]",
        platform: "Udemy",
        year: "2023",
      },
      {
        name: "Build and Deploy a React Native App | 2023 React Native Course Tutorial for Beginners",
        platform: "YouTube",
        year: "2023",
      },
      {
        name: "Next.js Tutorial for Beginners",
        platform: "YouTube",
        year: "2023",
      },
      {
        name: "Learn TypeScript - Full Tutorial",
        platform: "YouTube",
        year: "2023",
      },
      {
        name: "Fullstack Web Developer Course",
        platform: "freeCodeCamp",
        year: "2022",
      },
    ],
  },
  {
    year: "2022",
    degree: "Primer año del Grado en Física",
    institute: "U.N.E.D.",
    details:
      "Formación en materias como computación (C y Maxima), análisis matemático, álgebra, fundamentos de la física, circuitos electrónicos, aplicación del método científico y pensamiento lógico entre otros/as.",
  },
  {
    year: "2017",
    degree: "Grado en Turismo",
    institute: "Univ. de Cádiz",
    details:
      "Formación universitaria como profesional del turismo. A destacar mis aprendizajes de ingles, alemán, trabajo en equipo y soft-skills transferibles a la programación profesional.",
  },
];

const Education = () => {
  const {t} = useLanguage();

  return (
    <ul>
      {Object.entries(t.about.education).map(([key, { year, degree, institute, details, courses }]) => (
        <li key={key}>
          <div className='icon'>
            <i className='fa fa-book'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{year}</span>
          <h5 className='poppins-font text-uppercase'>
            {degree}
            <span className='place open-sans-font'>{institute}</span>
          </h5>
          <p className='open-sans-font'>{details}</p>
          <ul className='sublist'>
            {courses
              ? courses.map((course, i) => {
                  return (
                    <li className='sublist-element' key={`${key}-course-${i}`}>
                      <p>{course.name}</p>
                      <p className='ft-secondary-color'>
                        {course.platform} - {course.year}
                      </p>
                    </li>
                  );
                })
              : null}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Education;
