import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.png";
import Image from "next/image";
import useLanguage from "../../hooks/useLanguage";

const index = () => {
  const { t } = useLanguage();
  return (
    <section className='main-content '>
      <div className='container'>
        <div className='row'>
          {/* Personal Info Starts */}

          <div className='col-lg-6 col-12'>
            <div className='row'>
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 text-center">
                  {t.about.title3}
                </h3>
              </div>
              {/* End .col */}

              <div className='col-12 d-block d-sm-none'>
                <Image
                  src={heroImgMobile}
                  className='img-fluid main-img-mobile'
                  alt='about avatar'
                />
              </div>
              {/* image for mobile menu */}

              <div className='col-12'>
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className='col-12 justify-center align-center flex mt-2'>
                <a
                  className='button'
                  href='/assets/FranciscoSanchez-WebDeveloper-2025.pdf'
                  download='FranciscoSanchez-WebDeveloper-2025'
                >
                  <span className='button-text'>{t.about.downloadCV}</span>
                  <span className='button-icon fa fa-download'></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className='col-lg-6 col-12 mt-5 mt-lg-0 justify-center align-center flex'>
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className='separator my-5' />

        {/* Skills Starts */}
        <div className='row'>
          <div className='col-12'>
            <h3 className='text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-center custom-title ft-wt-600'>
              {t.about.title4}
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className='separator mt-1' />

        {/* Experience & Education Starts */}
        <div className='row'>
          <div className="flex flex-col items-center">
            <div className='col-12 lg-col-6'>
              <h3 className='text-uppercase pb-5 mb-0 text-center custom-title ft-wt-600'>
                {t.about.title5}
              </h3>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='resume-box'>
                <Experience />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className='col-12 lg-col-6'>
              <h3 className='text-uppercase pb-5 mb-0 text-center custom-title ft-wt-600'>
                {t.about.title6}
              </h3>
            </div>          
            <div className='col-12 col-lg-6 m-15px-tb'>
              <div className='resume-box'>
                <Education />
              </div>
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
