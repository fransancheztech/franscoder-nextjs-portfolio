import usePortfolioData from "./portfolioData";
import useLanguage from "../../hooks/useLanguage";
import Slider from "react-slick";
import Image from "next/image";
import CloseImg from "../../../public/assets/img/cancel.svg";
import { sliderSettings } from "../../constants";

const ModalMain = ({ modalId, setGetModal }) => {
    const PortfolioData = usePortfolioData();
    const { t } = useLanguage();
    return (
        <div className="modal_portfolio">
            <div
                className="modal__outside"
                onClick={() => setGetModal(false)}></div>
            <div className="modal__content">
                {PortfolioData.filter((item) => item.id === modalId).map(
                    (item) => {
                        return (
                            <div key={item.id} data-aos="fade">
                                <h2 className="heading mb-2">{item.type}</h2>
                                <div className="modal__details">
                                    {item.modalDetails.map((details, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="row open-sans-font">
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-file-text-o pr-2"></i>
                                                    {
                                                        t.about.projects.modals
                                                            .title1
                                                    }
                                                    :{" "}
                                                    <span className="ft-wt-600">
                                                        {details.project}
                                                    </span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-code pr-2"></i>
                                                    {
                                                        t.about.projects.modals
                                                            .title2
                                                    }
                                                    :{" "}
                                                    <a
                                                        className="preview-link"
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                        href={details.codeLink}>
                                                        {
                                                            t.about.projects
                                                                .modals.value2
                                                        }
                                                    </a>{" "}
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-keyboard-o pr-2"></i>
                                                    {
                                                        t.about.projects.modals
                                                            .title3
                                                    }
                                                    :{" "}
                                                    <span className="ft-wt-600">
                                                        {details.language}
                                                    </span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="fa fa-external-link pr-2"></i>
                                                    {
                                                        t.about.projects.modals
                                                            .title4
                                                    }
                                                    :{" "}
                                                    <a
                                                        className="preview-link"
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                        href={details.link}>
                                                        {details.preview}
                                                    </a>
                                                </div>
                                                <div className="col-12">
                                                    <i className="fa fa-exclamation pr-2"></i>
                                                    {
                                                        t.about.projects.modals
                                                            .title5
                                                    }
                                                    :{" "}
                                                    <span className="ft-wt-600">
                                                        {
                                                            t.about.projects
                                                                .modals.notice
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <figure className="modal__img">
                                    <Slider {...sliderSettings}>
                                        <div>
                                            <Image
                                                src={item.mainImage}
                                                alt="portfolio project demo"
                                            />
                                        </div>
                                        {item.images &&
                                            item.images.map((imgSrc, index) => (
                                                <div key={index}>
                                                    <Image
                                                        src={imgSrc}
                                                        alt="portfolio project demo"
                                                    />
                                                </div>
                                            ))}
                                    </Slider>
                                </figure>

                                <button
                                    className="close-modal"
                                    onClick={() => setGetModal(false)}>
                                    <Image
                                        src={CloseImg}
                                        alt="portfolio project demo"
                                    />
                                </button>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
    // if (modalId === 1) {
    //   return (
    //     <ModalOne
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // } else if (modalId === 2) {
    //   return (
    //     <ModalTwo
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // } else if (modalId === 3) {
    //   return (
    //     <ModalThree
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // } else if (modalId === 4) {
    //   return (
    //     <ModalFour
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // } else if (modalId === 5) {
    //   return (
    //     <ModalFive
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // } else if (modalId === 6) {
    //   return (
    //     <ModalSix
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // } else if (modalId === 6) {
    //   return (
    //     <ModalSix
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // } else if (modalId === 7) {
    //   return (
    //     <ModalSeven
    //       modalId={modalId}
    //       setGetModal={setGetModal}
    //     />
    //   )
    // }
};

export default ModalMain;
