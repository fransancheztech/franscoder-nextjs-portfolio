import useLanguage from "../../hooks/useLanguage";

const Education = () => {
  const {t} = useLanguage();

  return (
    <ul>
      {Object.entries(t.about.education).map(([key, { year, degree, institute, details, title1, title2, certifications, courses }]) => (
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
          <div className='h-6'></div>
          <h6 className='poppins-font text-uppercase sublist-heading'>{title1}{title1 && ":"}</h6>
          <div className='h-2'></div>
          <ul className='sublist p-0'>
            {certifications
              ? certifications.map((cert, i) => {
                  return (
                    <li className='sublist-element' key={`${key}-certificate-${i}`}>
                      <p>{cert.name}</p>
                      <p className='ft-secondary-color'>
                        {cert.platform} - {cert.year}
                      </p>
                    </li>
                  );
                })
              : null}
          </ul>
          <h6 className='poppins-font text-uppercase sublist-heading'>{title2}{title2 && ":"}</h6>
          <div className='h-2'></div>
          <ul className='sublist p-0'>
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
