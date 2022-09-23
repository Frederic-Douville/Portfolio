import LinkedInLogo from '../../assets/dessins/logo linkedin.webp';
import MailLogo from '../../assets/dessins/logo mail.webp';

function Contact() {
    return (
        <div className="page d-flex f-d-column j-c-flexStart a-i-center">
            <div className="contact-ctn d-flex f-d-column j-c-flexStart a-i-center">
                <div className="contact-pitch-ctn d-flex f-d-column j-c-center a-i-center">
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
                <div className="contact-drawing-ctn d-flex f-d-row j-c-spaceAround a-i-center">
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
