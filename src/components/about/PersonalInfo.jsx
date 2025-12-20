import useLanguage from '../../hooks/useLanguage';

const PersonalInfo = () => {
    const { t } = useLanguage();

    const personalInfoContent = Object.entries(t.about.personalInfo).map(([key, { title, value }]) => ({
        meta: title,
        metaInfo: value,
        hasColor: key === 'job' ? 'green' : ''
    }));

    return (
        <ul className='about-list list-unstyled open-sans-font'>
            {personalInfoContent.map((val, i) => (
                <li key={i}>
                    <span className='title'>{val.meta}: </span>
                    <span className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}>{val.metaInfo}</span>
                </li>
            ))}
        </ul>
    );
};

export default PersonalInfo;
