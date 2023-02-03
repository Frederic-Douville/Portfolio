import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { dropDownMenuClosing } from '../../feature/dropDownMenu.js';
import LinkedInLogo from '../../assets/dessins/logo linkedin.webp';
import MailLogo from '../../assets/dessins/logo mail.webp';

function Contact() {
    const store = useStore();
    useEffect(() => {
        store.dispatch(dropDownMenuClosing());
    });
    return (
        <div className="page contact-page">
            <div className="contact-ctn unfocus">
                <div className="contact-pitch-ctn">
                    <p className="contact-pitch-text">
                        Contactez-moi à cette adresse email :{' '}
                        <a
                            href="mailto:frederic.douville@zoho.eu"
                            className="contact-pitch-link"
                        >
                            frederic.douville@zoho.eu
                        </a>
                    </p>

                    <p className="contact-pitch-text">
                        ou sur{' '}
                        <a
                            href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-douville-949217172/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-pitch-link"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>
                <div className="contact-drawing-ctn">
                    <img
                        src={MailLogo}
                        alt="mail logo"
                        className="contact-drawing-img contact-drawing-mail"
                    />
                    <img
                        src={LinkedInLogo}
                        alt="linkedin logo"
                        className="contact-drawing-img contact-drawing-linkedin"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
