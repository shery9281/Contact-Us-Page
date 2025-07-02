import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

const ContactForm = () => {

    const onSubmitF = (e) =>{
        e.preventDefault();
        console.log(e);
        
    }
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button  
                    text="VIA CALL" 
                    icon={<FaPhoneAlt fontSize="24px" />} />

                </div>
                <Button isoutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />
                <form onSubmit={onSubmitF} action="">
                    <div className={styles.formController}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.formController}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.formController}>
                        <label htmlFor="text">Text</label>
                        <textarea type="text" name="text" rows="8" />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                    <Button  text="SUBMIT" />
                    </div>
                    
                </form>
            </div>
            <div className={styles.contactImage}>
                <img src="./images/contact.svg" alt="Contact" />

            </div>
        </section>
    )
}

export default ContactForm