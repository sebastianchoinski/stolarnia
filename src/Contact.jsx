import React from 'react';
import './Contact.scss'
function Contact(props) {
    return (
        <div>
            <h2 className='contactheader'>Skontaktuj się z nami poprzez formularz</h2>
    <div className='contact-form'>
    <form action="https://formsubmit.co/0ed6151b87d0348dbd82eb3911187d3b" method="POST" enctype="multipart/form-data">
        <div className="form-group">
            <p className='destination'>Imię:</p>
            <input type="text" id="name" name="name" required></input>
        </div>
        <div className="form-group">
        <p className='destination'>E-mail:</p>
            <input type="email" id="email" name="email" required></input>
        </div>
        <div className="form-group">
            <p className='destination'>Treść:</p>
            <textarea id="message" name="message" required></textarea>
        </div>
        <div className='form-group'>
            <p className='destination'>Załącz zdjęcie maks. 5MB:</p>
            <input type="file" name="attachment" accept="image/png, image/jpeg"></input>
        </div>
        <button className='submit-button' type="submit">Wyślij</button>
    </form>
    </div>
        <div className='othercontactforms'>
            <h2 className='contactheader'>lub:</h2>
            <div className='phoneemail'>
                <div className='textphoneemail'>
                <a className='formphonenumber' href="tel:123-456-7890"><strong>Zadzwoń :</strong> +48 XXX XXX XXX</a> <br></br><br></br>
                <a className='formphonenumber' href = "mailto: kontakt@manufaktura-stolar.pl"><strong>Napisz: </strong> kontakt@manufaktura-stolar.pl</a> 
                </div>
            </div>
        </div>

        </div>
    );
}

export default Contact;