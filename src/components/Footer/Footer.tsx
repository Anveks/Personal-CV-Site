import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(): JSX.Element {
    return (
        <footer>
            <a href="#" className="logo"> Anna Vekselman </a>

            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="socials">
                <a href=""><FacebookIcon /></a>
                <a href=""><InstagramIcon /></a>
            </div>
        </footer>
    );
}

export default Footer;
