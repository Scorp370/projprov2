import React from 'react';
import './Contact.css'




const Contact = () => {
    return (
        <div className='contact'>
            <form name='contact' className='contact_form' data-netlify="true" onSubmit="submit">
                <label for='name'>Nom</label>
                <input type='text' name='name'/>

                <input type="hidden" name="form-name" value="contact" />
                <label for='name'>Email</label>
                <input type='email' name='email'/>

                <label for='message'>Message</label>
                <textarea name='message'></textarea>

                <button type='button'>Envoyer</button>



            </form>
        </div>
    );
};

export default Contact;