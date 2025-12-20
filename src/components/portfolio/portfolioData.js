import Image1 from '../../../public/assets/img/portfolio/techlines-landpage-dark-portfolio.png';
import Image2 from '../../../public/assets/img/portfolio/jobify-landpage-portfolio.png';
import Image3 from '../../../public/assets/img/portfolio/ecomvision-overview-portfolio.png';
import Image4 from '../../../public/assets/img/portfolio/chart-map.png';
import Image5 from '../../../public/assets/img/portfolio/chart-heat.png';
import Image6 from '../../../public/assets/img/portfolio/chart-square-color.png';
import Image7 from '../../../public/assets/img/portfolio/plate-calculator1.png';
import useLanguage from '../../hooks/useLanguage';

const usePortfolioData = () => {
    const { t } = useLanguage();

    return [
        {
            id: 1,
            type: t.about.projects.project1.type,
            image: Image1,
            tag: ['mongodb', 'express', 'react', 'node', 'render'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project1.title,
                    codeLink: 'https://github.com/FranSCoder/techlines',
                    language: 'MongoDB, Express, ReactJS',
                    preview: 'https://techlines.com',
                    link: 'https://techlines-uoaa.onrender.com/'
                }
            ]
        },
        {
            id: 2,
            type: t.about.projects.project2.type,
            image: Image2,
            tag: ['mongodb', 'express', 'react', 'node', 'render'],
            delayAnimation: '100',
            modalDetails: [
                {
                    project: t.about.projects.project2.title,
                    codeLink: 'https://github.com/FranSCoder/jobify',
                    language: 'MongoDB, Express, ReactJS',
                    preview: 'https://jobify.com',
                    link: 'https://mern-jobify-4g31.onrender.com/'
                }
            ]
        },
        {
            id: 3,
            type: t.about.projects.project3.type,
            image: Image7,
            tag: ['react', 'react-native'],
            delayAnimation: '200',
            modalDetails: [
                {
                    project: t.about.projects.project3.title,
                    codeLink: 'https://github.com/FranSCoder/plate-counter-app',
                    language: 'React Native, ReactJS',
                    preview: 'https://play.google.com/platecounterapp',
                    link: 'https://play.google.com/store/apps/details?id=com.franscoder.platecounterapp'
                }
            ]
        },
        {
            id: 4,
            type: t.about.projects.project4.type,
            image: Image3,
            tag: ['mongodb', 'express', 'react', 'node', 'render'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project4.title,
                    codeLink: 'https://github.com/FranSCoder/ecomvision',
                    language: 'MongoDB, Express, ReactJS',
                    preview: 'https://ecomvision.com',
                    link: 'https://admin-frontend-3yrt.onrender.com/'
                }
            ]
        },
        {
            id: 5,
            type: t.about.projects.project5.type,
            image: Image4,
            tag: ['d3'],
            delayAnimation: '100',
            modalDetails: [
                {
                    project: t.about.projects.project5.title,
                    codeLink: 'https://github.com/FranSCoder/useducation',
                    language: 'D3, JS, HTML, CSS',
                    preview: 'https://cartograma.net',
                    link: 'http://franscoder.github.io/useducation'
                }
            ]
        },
        {
            id: 6,
            type: t.about.projects.project6.type,
            image: Image5,
            tag: ['d3'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project6.title,
                    codeLink: 'https://github.com/FranSCoder/global-temperatures',
                    language: 'D3, JS, HTML, CSS',
                    preview: 'https://heatchart.net',
                    link: 'http://franscoder.github.io/global-temperatures'
                }
            ]
        },
        {
            id: 7,
            type: t.about.projects.project7.type,
            image: Image6,
            tag: ['d3'],
            delayAnimation: '100',
            modalDetails: [
                {
                    project: t.about.projects.project7.title,
                    codeLink: 'https://github.com/FranSCoder/movie-sales',
                    language: 'D3, JS, HTML, CSS',
                    preview: 'https://top100movies.net',
                    link: 'https://franscoder.github.io/movie-sales'
                }
            ]
        }
    ];
};

export default usePortfolioData;
