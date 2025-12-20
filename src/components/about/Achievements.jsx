import useLanguage from "../../hooks/useLanguage";

const Achievements = () => {

  const {t} = useLanguage();

  const achievementsContent = [
  { title: t.about.endedProjects1, subTitle1: t.about.endedProjects2, subTitle2: t.about.endedProjects3 },
];

  return (
    <div className='row'>
      {achievementsContent.map((val, i) => (
        <div className='col-6' key={i}>
          <div className='box-stats with-margin'>
            <h3 className='poppins-font position-relative'>{val.title}</h3>
            <p className='open-sans-font m-0 position-relative text-uppercase'>
              {val.subTitle1} <span className='d-block'>{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
