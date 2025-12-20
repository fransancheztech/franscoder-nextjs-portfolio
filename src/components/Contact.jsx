import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLanguage from "../hooks/useLanguage";

const Contact = () => {
  const form = useRef();
  const {t} = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dj6yi9p",
        "template_qtd7yok",
        form.current,
        "dLj0TUKKxzhLjwoSO"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success(t.contact.successMessage, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error(t.contact.errorMessage, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form id='myForm' className='contactform' ref={form} onSubmit={sendEmail}>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='form-group'>
              <input type='text' name='name' placeholder={t.contact.form.name.toUpperCase()} required />
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-6'>
            <div className='form-group'>
              <input
                type='email'
                name='user_email'
                placeholder={t.contact.form.email.toUpperCase()}
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-12'>
            <div className='form-group'>
              <input type='text' name='subject' placeholder={t.contact.form.subject.toUpperCase()} required />
            </div>
          </div>
          {/* End .col */}

          <div className='col-12'>
            <div className='form-group'>
              <textarea
                name='message'
                placeholder={t.contact.form.message.toUpperCase()}
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className='col-12'>
            <button type='submit' className='button'>
              <span className='button-text'>{t.contact.form.send}</span>
              <span className='button-icon fa fa-send'></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
