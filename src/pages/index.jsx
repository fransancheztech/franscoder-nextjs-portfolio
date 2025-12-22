import { useEffect } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Hero from '../components/hero/Hero'
import AboutMain from '../components/about'
import Wrapper from '../layout/wrapper'
import SEO from '../components/Seo'
import Portfolio from '../components/portfolio/Portfolio'
import Address from '../components/Address'
import Social from '../components/Social'
import Contact from '../components/Contact'
import SwitchDark from '../components/switch/SwitchDark'
import SwitchLng from '../components/switch/SwitchLng'
import useLanguage from '../hooks/useLanguage'

const HomeDark = () => {

  const { t } = useLanguage()

  const menuItem = [
  { icon: 'fa-home', menuName: t.tabs.home },
  { icon: 'fa-user', menuName: t.tabs.about },
  { icon: 'fa-briefcase', menuName: t.tabs.portfolio },
  { icon: 'fa-envelope-open', menuName: t.tabs.contact },
]

  useEffect(() => {
    document.querySelector('body').classList.remove('rtl')
  }, [])

  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio de Fran Sánchez'} />

      <div className='yellow'>
        <SwitchLng/>
        <SwitchDark />
        {/* End Switcher */}
        <Tabs>
          <div className='header'>
            <TabList className=' icon-menu  revealator-slideup revealator-once revealator-delay1'>
              {menuItem.map((item, i) => (
                <Tab
                  className='icon-box'
                  key={i}
                >
                  <i className={`fa ${item.icon}`}></i>
                  <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>
          {/* End Menu Content */}

          <div className='tab-panel_list'>
            {/* Hero Content Starts */}
            <TabPanel className='home '>
              <div
                className='container-fluid main-container container-home p-0 g-0'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <div className='color-block d-none d-lg-block'></div>
                <Hero />
              </div>
            </TabPanel>
            {/* Hero Content Ends */}

            {/* About Content Starts */}
            <TabPanel className='about'>
              <div
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <div className='title-section text-center'>
                  <h1>
                    {t.about.title1} <span>{t.about.title2}</span>
                  </h1>
                  <span className='title-bg'>{t.about.title1} {t.about.title2}</span>
                </div>
                {/* End title */}
                <AboutMain />
              </div>
            </TabPanel>
            {/* About Content Ends */}

            {/* Portfolio Content Starts */}
            <TabPanel className='portfolio professional'>
              <div
                className='title-section text-center'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <h1>
                  {t.about.titlePortfolio1} <span>{t.about.titlePortfolio2}</span>
                </h1>
                <span className='title-bg'>{t.about.titlePortfolio2}</span>
              </div>
              {/* End title */}
              <Portfolio />
            </TabPanel>
            {/* Portfolio Content Ends */}

            {/* Contact Content Starts */}
            <TabPanel className='contact'>
              <div
                className='title-section text-center'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <h1>
                  {t.contact.title1} <span>{t.contact.title2}</span>
                </h1>
                <span className='title-bg'>{t.contact.title3}</span>
              </div>
              <div
                className='container'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <div className='row'>
                  {/*  Left Side Starts */}
                  <div className='col-12 col-lg-4'>
                    <h3 className='text-uppercase custom-title mb-0 ft-wt-600 pb-3'>{t.contact.title4}</h3>
                    <p className='open-sans-font mb-4'>
                      {t.contact.paragraph}
                    </p>
                    <Address />
                    {/* End Address */}

                    <Social />
                    {/* End Social */}
                  </div>
                  {/* Left Side Ends */}

                  {/*  Contact Form Starts  */}
                  <div className='col-12 col-lg-8'>
                    <Contact />
                  </div>
                  {/*  Contact Form Ends */}
                </div>
              </div>
              {/* End .container */}
            </TabPanel>
            {/* Contact Content Ends */}
          </div>
        </Tabs>
      </div>
    </Wrapper>
  )
}

export default HomeDark
