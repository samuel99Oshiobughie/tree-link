import Footer from "./Footer";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact__container">
        <div className="form__container">
            <h1 className="form_title">Contact Me</h1> 
            <p className="form_text">Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div className="name-spacing">
                    <label className="firstName">
                        <p>First name</p>
                        <input 
                            id="first_name"
                            type="text" 
                            name="firstname" 
                            placeholder="Enter your first name"
                        />
                    </label>
                    <label className="lastName">
                        <p>Last name</p>
                        <input 
                            id="last_name"
                            type="text" 
                            name="lastname" 
                            placeholder="Enter your last name"
                        />
                    </label>
                </div>
                <label className="emailAddress">
                    <p>Email</p>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        placeholder="yourname@email.com"
                    />
                </label>
                <label className="textMessage">
                    <p>Message</p>
                    <textarea name="message" id="message" rows="10" cols="30">
                        Send me a message and I'll reply you as soon as possible...
                    </textarea>
                </label>
                <label className="checkBox">
                    <input 
                        id="checkbox"
                        type="checkbox" 
                        name="checkbox" 
                    />
                    <p>You agree to providing your data to {"{name}"} who may contact you.</p>
                </label>
                <button type="button" id="btn__submit">Send message</button>
            </form>
        </div>
        <Footer />
    </div>

  )
}

export default Contact