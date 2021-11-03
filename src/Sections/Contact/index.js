import emailjs from 'emailjs-com';
import Facebook from '../../assets/facebook-square-brands.svg';
import LinkedIn from '../../assets/linkedin-brands.svg';
import Twitter from '../../assets/twitter-square-brands.svg';
import Instagram from '../../assets/instagram-square-brands.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactSection, Title, Icons, Form, Row } from './ContactElements';

const Contact = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        toast.success('Votre message a été envoyé avec succès. je vous contacterai bientôt');

        emailjs.sendForm('service_n17z5f9', 'template_zad69ge', e.target, 'user_6PKwE9QMm52ExRf6tWlO6').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };
    return (
        <ContactSection id="contact">
            <Title>Contactez-moi</Title>
            <Icons>
                <a href="http://facebook.com/">
                    <img src={Facebook} alt="FaceBook" height="400" width="400" />
                </a>
                <a href="http://linkedin.com/">
                    <img src={LinkedIn} alt="LinkedIn" height="400" width="400" />
                </a>
                <a href="http://twitter.com/">
                    <img src={Instagram} alt="Twitter" height="400" width="400" />
                </a>
                <a href="http://instagram.com/">
                    <img src={Twitter} alt="Instagram" height="400" width="400" />
                </a>
            </Icons>
            <Form onSubmit={submitHandler}>
                <Row>
                    <input type="text" name="user_name" placeholder="Votre nom complet" required />
                    <input type="email" name="user_email" placeholder="Votre email" required />
                </Row>
                <textarea type="text" name="message" cols="30" rows="2" placeholder="Votre message" required></textarea>
                <button type="submit">Envoyer</button>
                <ToastContainer />
            </Form>
        </ContactSection>
    );
};

export default Contact;
