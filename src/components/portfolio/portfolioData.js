// ---------------------------------------------------------------------------
// portfolioData.js
//
// Rebuilt 2026-08-26 around real, paid, consequential work.
//
// What was removed and why: TechLines, Jobify, Ecomvision and the three D3
// visualisations were all course or curriculum output — TechLines and Jobify
// are the projects built by two of the Udemy courses listed in the education
// section, and any reviewer who has seen that curriculum recognises them on
// sight. Plate Calculator was delisted from Google Play, so it could not be
// viewed at all. Meanwhile every piece of real client and production work was
// missing from this grid entirely. Git history has the old entries.
//
// ⚠️ The four images below are PLACEHOLDERS. Overwrite each file in
//    public/assets/img/portfolio/ with the real screenshot, keeping the exact
//    filename. Do not deploy until that is done — the placeholders say so on
//    their face, which is deliberate.
//
// On links: only one project has a public URL, and that is correct. A link
// that leads to a login wall, a dead domain, or a minute of loading spinner is
// worse than no link — that is what this whole rebuild was fixing. Where there
// is nothing to link, `notice` explains why, which reads as production
// software rather than as something missing.
// ---------------------------------------------------------------------------

import RelaxzyImg from '../../../public/assets/img/portfolio/relaxzy-calendar.png'
import InvoiceImg from '../../../public/assets/img/portfolio/invoice-collector.png'
import LawFirmImg from '../../../public/assets/img/portfolio/abogados-rcg.png'
import MoistureImg from '../../../public/assets/img/portfolio/humedades-andalucia.png'

import useLanguage from '../../hooks/useLanguage'

const usePortfolioData = () => {
    const { t } = useLanguage()

    return [
        {
            // Production. A business Francisco co-owns and operates, so the
            // consequences of every design decision land on him.
            //
            // Deliberately NOT linked. The deployment is internal-only: a
            // visitor reaches a login wall and sees nothing, and publishing
            // the URL would turn an unlisted internal system holding client
            // names, appointment times and payment records into a crawlable
            // target. The screenshot shows far more than the login page could.
            id: 1,
            type: t.about.projects.project1.type,
            mainImage: RelaxzyImg,
            images: [],
            tag: ['nextjs', 'react', 'typescript', 'postgresql', 'stripe', 'fullstack'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project1.title,
                    codeLink: '',
                    language: 'Next.js, React, TypeScript, Prisma, PostgreSQL, Supabase, Stripe, i18n',
                    preview: '',
                    link: '',
                    notice: t.about.projects.project1.notice
                }
            ]
        },
        {
            // The only evidence he writes automation in code rather than in
            // vendor RPA tooling. Local tool, private repo — nothing to link.
            id: 2,
            type: t.about.projects.project2.type,
            mainImage: InvoiceImg,
            images: [],
            tag: ['python', 'playwright', 'automation'],
            delayAnimation: '100',
            modalDetails: [
                {
                    project: t.about.projects.project2.title,
                    codeLink: '',
                    language: 'Python, Playwright, IMAP, persistent Edge profile',
                    preview: '',
                    link: '',
                    notice: t.about.projects.project2.notice
                }
            ]
        },
        {
            id: 3,
            type: t.about.projects.project3.type,
            mainImage: LawFirmImg,
            images: [],
            tag: ['nextjs', 'typescript', 'tailwind', 'fullstack', 'client'],
            delayAnimation: '200',
            modalDetails: [
                {
                    project: t.about.projects.project3.title,
                    codeLink: '',
                    language: 'Next.js, TypeScript, Tailwind CSS, Framer Motion',
                    preview: 'abogadosrcg.com',
                    link: 'https://www.abogadosrcg.com',
                    notice: ''
                }
            ]
        },
        {
            id: 4,
            type: t.about.projects.project4.type,
            mainImage: MoistureImg,
            images: [],
            tag: ['react', 'typescript', 'mui', 'client'],
            delayAnimation: '0',
            modalDetails: [
                {
                    project: t.about.projects.project4.title,
                    codeLink: '',
                    language: 'React, TypeScript, MUI, Vercel',
                    preview: '',
                    link: '',
                    notice: t.about.projects.project4.notice
                }
            ]
        }
    ]
}

export default usePortfolioData
