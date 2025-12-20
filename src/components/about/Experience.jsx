import useLanguage from "../../hooks/useLanguage";

const Experience = () => {

  const {t} = useLanguage();

  return (
    <ul>
      {Object.entries(t.about.experience).map(([key, {year, position, companyName, details, technologies}]) => (
        <li key={key}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{year}</span>
          <h5 className='poppins-font text-uppercase'>
            {position}
            <span className='place open-sans-font'>{companyName}</span>
          </h5>
          <p className='open-sans-font'>{details}</p>
          <ul className='sublist'>
            {technologies
              ? technologies.map((value, i) => {
                  return (
                    <li className='sublist-element' key={`${key}-tech-${i}`}>
                      <p className='open-sans-font ft-sz-12'>{value}</p>
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

export default Experience;
