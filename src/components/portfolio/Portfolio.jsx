import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import usePortfolioData from './portfolioData'
import Image from 'next/image'
import ModalMain from './modal/ModalMain'
import useLanguage from '../../hooks/useLanguage'

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false)
  const [modalId, setModalId] = useState(1)

  const handleModal = id => {
    setGetModal(true)
    setModalId(id)
  }

  const PortfolioData = usePortfolioData()

  const {t} = useLanguage()

  return (
    <>
      <div className='portfolio-main'>
        <Tabs>
          <TabList
            className='portfolio-tab-list'
            data-aos='fade-up'
          >
            <Tab>{t.about.titlePorfolioTab1.toUpperCase()}</Tab>
            <Tab>{t.about.titlePorfolioTab2.toUpperCase()}</Tab>
            <Tab>{t.about.titlePorfolioTab3.toUpperCase()}</Tab>
            <Tab>{t.about.titlePorfolioTab4.toUpperCase()}</Tab>
          </TabList>

          <div className='container'>
            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.map(item => {
                  const { id, type, image, delayAnimation, modalDetails } = item

                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt='portfolio project demo'
                        />
                        <h3 className='flex flex-col'>
                          <span className='content-title text-center'>{modalDetails[0].project}</span>
                          <span className='content-title text-center opacity-70'>{type}</span>
                        </h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter(item =>
                  ['mongodb', 'express', 'react', 'node'].every(i => item.tag.includes(i))
                ).map(item => {
                  const { id, type, image, delayAnimation } = item
                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt='portfolio project demo'
                        />
                        <h3>
                          <span className='content-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  )
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter(item => item.tag.includes('react-native')).map(item => {
                  const { id, type, image, delayAnimation } = item
                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt='portfolio project demo'
                        />
                        <h3>
                          <span className='content-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  )
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='tab-container'>
                {PortfolioData.filter(item => item.tag.includes('d3')).map(item => {
                  const { id, type, image, delayAnimation } = item
                  return (
                    <div
                      key={id}
                      data-aos='fade-right'
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className='tab-content'
                        onClick={() => handleModal(id)}
                      >
                        <Image
                          src={image}
                          alt='portfolio project demo'
                        />
                        <h3>
                          <span className='content-title'>{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  )
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && (
        <ModalMain
          modalId={modalId}
          setGetModal={setGetModal}
        />
      )}{' '}
    </>
  )
}

export default Portfolio
