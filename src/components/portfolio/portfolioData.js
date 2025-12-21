import Image1a from '../../../public/assets/img/portfolio/techlines-landpage-dark-portfolio.png'
import Image1b from '../../../public/assets/img/portfolio/techlines-caja-dark-portfolio.png'
import Image2a from '../../../public/assets/img/portfolio/jobify-landpage-portfolio.png'
import Image2b from '../../../public/assets/img/portfolio/jobify-overview-portfolio.png'
import Image2c from '../../../public/assets/img/portfolio/jobify-searchform-portfolio.png'
import Image3a from '../../../public/assets/img/portfolio/plate-calculator1.png'
import Image3b from '../../../public/assets/img/portfolio/plate-calculator2.png'
import Image3c from '../../../public/assets/img/portfolio/plate-calculator3.png'
import Image4a from '../../../public/assets/img/portfolio/ecomvision-overview-portfolio.png'
import Image4b from '../../../public/assets/img/portfolio/ecomvision-products-portfolio.png'
import Image4c from '../../../public/assets/img/portfolio/ecomvision-dailysales-portfolio.png'
import Image5 from '../../../public/assets/img/portfolio/chart-map.png'
import Image6 from '../../../public/assets/img/portfolio/chart-heat.png'
import Image7 from '../../../public/assets/img/portfolio/chart-square-color.png'

import useLanguage from '../../hooks/useLanguage';

const usePortfolioData = () => {
    const { t } = useLanguage();

    return [
        {
            id: 1,
            type: t.about.projects.project1.type,
            mainImage: Image1a,
            images: [
                Image1b,
            ],
            tag: ['mongodb', 'express', 'react', 'node', 'render'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project1.title,
                    codeLink: 'https://github.com/fransancheztech/techlines',
                    language: 'MongoDB, Express, ReactJS',
                    preview: 'https://techlines.com',
                    link: 'https://techlines-uoaa.onrender.com/'
                }
            ]
        },
        {
            id: 2,
            type: t.about.projects.project2.type,
            mainImage: Image2a,
            images: [
                Image2b,
                Image2c,
            ],
            tag: ['mongodb', 'express', 'react', 'node', 'render'],
            delayAnimation: '100',
            modalDetails: [
                {
                    project: t.about.projects.project2.title,
                    codeLink: 'https://github.com/fransancheztech/jobify',
                    language: 'MongoDB, Express, ReactJS',
                    preview: 'https://jobify.com',
                    link: 'https://mern-jobify-4g31.onrender.com/'
                }
            ]
        },
        {
            id: 3,
            type: t.about.projects.project3.type,
            mainImage: Image3a,
            images: [
                Image3b,
                Image3c,
            ],
            tag: ['react', 'react-native'],
            delayAnimation: '200',
            modalDetails: [
                {
                    project: t.about.projects.project3.title,
                    codeLink: 'https://github.com/fransancheztech/plate-counter-app',
                    language: 'React Native, ReactJS',
                    preview: 'https://play.google.com/platecounterapp',
                    link: 'https://play.google.com/store/apps/details?id=com.franscoder.platecounterapp'
                }
            ]
        },
        {
            id: 4,
            type: t.about.projects.project4.type,
            mainImage: Image4a,
            images: [
                Image4b,
                Image4c,
            ],
            tag: ['mongodb', 'express', 'react', 'node', 'render'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project4.title,
                    codeLink: 'https://github.com/fransancheztech/ecomvision',
                    language: 'MongoDB, Express, ReactJS',
                    preview: 'https://ecomvision.com',
                    link: 'https://admin-frontend-3yrt.onrender.com/'
                }
            ]
        },
        {
            id: 5,
            type: t.about.projects.project5.type,
            mainImage: Image5,
            tag: ['d3'],
            delayAnimation: '100',
            modalDetails: [
                {
                    project: t.about.projects.project5.title,
                    codeLink: 'https://github.com/fransancheztech/useducation',
                    language: 'D3, JS, HTML, CSS',
                    preview: 'https://cartograma.net',
                    link: 'http://fransancheztech.github.io/useducation'
                }
            ]
        },
        {
            id: 6,
            type: t.about.projects.project6.type,
            mainImage: Image6,
            tag: ['d3'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project6.title,
                    codeLink: 'https://github.com/fransancheztech/global-temperatures',
                    language: 'D3, JS, HTML, CSS',
                    preview: 'https://heatchart.net',
                    link: 'http://fransancheztech.github.io/global-temperatures'
                }
            ]
        },
        {
            id: 7,
            type: t.about.projects.project7.type,
            mainImage: Image7,
            tag: ['d3'],
            delayAnimation: '100',
            modalDetails: [
                {
                    project: t.about.projects.project7.title,
                    codeLink: 'https://github.com/fransancheztech/movie-sales',
                    language: 'D3, JS, HTML, CSS',
                    preview: 'https://top100movies.net',
                    link: 'https://fransancheztech.github.io/movie-sales'
                }
            ]
        }
    ];
};

export default usePortfolioData;
