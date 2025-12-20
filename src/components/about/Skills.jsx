import useLanguage from '../../hooks/useLanguage';

const Skills = () => {
    const { t } = useLanguage();

    const skillsContent = [
        { skillName: "REACT", skillPercent: "89" },
        { skillName: "TYPESCRIPT", skillPercent: "87" },
        { skillName: "AGILE & SCRUM", skillPercent: "87" },
        { skillName: "TAILWIND & MUI", skillPercent: "86" },
        { skillName: "REDUX & RTK QUERY", skillPercent: "83" },
        { skillName: "GIT & GITHUB ACTIONS", skillPercent: "81" },
        { skillName: "NODE.JS", skillPercent: "79" },
        { skillName: "SQL & MONGODB", skillPercent: "77" },
        { skillName: "NEXT.JS", skillPercent: "77" },
        { skillName: "EXPRESS", skillPercent: "76" },
        { skillName: "DOCKER & KUBERNETES", skillPercent: "74" },
        { skillName: "JEST & CYPRESS", skillPercent: "72" },
    ];

    return (
        <>
            {skillsContent.map((val, i) => (
                <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
                    <div className={`c100 p${val.skillPercent}`}>
                        <span>{val.skillPercent}%</span>
                        <div className='slice'>
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>{val.skillName}</h6>
                </div>
            ))}
        </>
    );
};

export default Skills;
