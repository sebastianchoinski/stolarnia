import React from 'react';
import './Footer.scss'
export default function MainPagePosts(props) {
    return (
        
<footer class="footer">
    <div class="footer-nav">
        <ul class="footer-links">
            <li><a href="/">Strona główna</a></li>
            <li><a href="projects">Projekty</a></li>
            <li><a href="about">O nas</a></li>
            <li><a href="contact">Kontakt</a></li>
        </ul>
    </div>
    <div class="footer-contact">
        <p>E-mail: kontakt@manufaktura-stolar.pl</p>
        <p>Telefon: (123) 456-7890</p>
    </div>
    <div class="footer-bottom">
        &copy; 2023 | MANUFAKTURA STOLAR
    </div>
</footer>
       
    );
}
