import useLanguage from '../../hooks/useLanguage';

// Rebuilt 2026-08-27. This component used to render twelve circular progress
// dials with hardcoded percentages — REACT 89%, TYPESCRIPT 87%, NODE.JS 79%.
// Those numbers were self-assessed with no scale behind them, which made them
// impossible to defend and easy to read as a junior-portfolio tell. They also
// capped the claim: "89%" says there is an 11% you do not have.
//
// The list was wrong too. It led with React and did not contain Python at all,
// so this one component still said front-end developer while every other
// surface on the site now leads with Python.
//
// The groups now live in messages/*.json, so they translate and so the content
// can change without touching the markup.
const Skills = () => {
    const { t } = useLanguage();

    return (
        <>
            {t.about.skills.map((group, i) => (
                <div className='col-12 col-md-6 col-xl-4 mb-4' key={i}>
                    <div className='skill-group'>
                        <h6 className='skill-group__title text-uppercase open-sans-font'>
                            {group.group}
                        </h6>
                        <ul className='skill-group__list'>
                            {group.items.map((item, j) => (
                                <li className='skill-tag open-sans-font' key={j}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skills;
