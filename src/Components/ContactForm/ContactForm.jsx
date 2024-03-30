import { MdOutlineMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Adeel");
  const [email, setEmail] = useState("adeelkhan@gmail.com");
  const [text, setText] = useState("Walla walla habibi");


  
  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  
    console.log(
      name,
      email,
      text
    )
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={"20px"} />}
          />
          <Button text="VIA CALL" icon={<FiPhone fontSize={"20px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize={"20px"} />}
        />
        <form onSubmit={onSubmit }>
          <div className={styles.form_container}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={6}/>
          </div>
          <div style={
            {display: "flex", justifyContent:"end",
            }
          }>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {
              name + " " + email + " "+ text
            }
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="Service" width={465} />
      </div>
    </section>
  );
};

export default ContactForm;
