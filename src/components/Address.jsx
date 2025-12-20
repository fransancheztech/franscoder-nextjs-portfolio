import React from 'react'
import useLanguage from '../hooks/useLanguage'

const Address = () => {
  const { t } = useLanguage()

  return (
    <>
      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block'>{t.about.personalInfo.location.title}</span> {t.about.personalInfo.location.value}
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-envelope-open position-absolute'></i>
        <span className='d-block'>{t.about.personalInfo.email.title}</span> <a href={`mailto:${t.about.personalInfo.email.value}`}>{t.about.personalInfo.email.value}</a>
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-phone-square position-absolute'></i>
        <span className='d-block'>{t.about.personalInfo.phone.title}</span> <a href={`tel:${t.about.personalInfo.phone.value}`}>{t.about.personalInfo.phone.value}</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  )
}

export default Address
