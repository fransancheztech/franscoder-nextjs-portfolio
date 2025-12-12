import React, { useEffect } from 'react'
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

const menuItem = [
  { icon: 'fa-home', menuName: 'Inicio' },
  { icon: 'fa-user', menuName: 'Conóceme' },
  { icon: 'fa-briefcase', menuName: 'Portfolio' },
  { icon: 'fa-envelope-open', menuName: 'Contacto' },
]

const HomeDark = () => {
  const {t} = useLanguage();
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
                  <h2>{item.menuName}</h2>
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
                <div className='title-section text-start text-sm-center'>
                  <h1>
                    SOBRE <span>MÍ</span>
                  </h1>
                  <span className='title-bg'>Sobre mí</span>
                </div>
                {/* End title */}
                <AboutMain />
              </div>
            </TabPanel>
            {/* About Content Ends */}

            {/* Portfolio Content Starts */}
            <TabPanel className='portfolio professional'>
              <div
                className='title-section text-start text-sm-center'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <h1>
                  mi <span>portfolio</span>
                </h1>
                <span className='title-bg'>portfolio</span>
              </div>
              {/* End title */}
              <Portfolio />
            </TabPanel>
            {/* Portfolio Content Ends */}

            {/* Contact Content Starts */}
            <TabPanel className='contact'>
              <div
                className='title-section text-start text-sm-center'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <h1>
                  contacta <span>conmigo</span>
                </h1>
                <span className='title-bg'>contacto</span>
              </div>
              <div
                className='container'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <div className='row'>
                  {/*  Left Side Starts */}
                  <div className='col-12 col-lg-4'>
                    <h3 className='text-uppercase custom-title mb-0 ft-wt-600 pb-3'>No seas tímido/a !</h3>
                    <p className='open-sans-font mb-4'>
                      No dudes en ponerte en contacto conmigo. Siempre estoy dispuesto a hablar sobre nuevos proyectos,
                      ideas creativas o visiones.
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
