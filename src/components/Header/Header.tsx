import ActionButtons from "./ActionButtons";
import "./Header.css";
import photo from '../../assets/photo.jpg'
import Icons from "./Icons";

function Header(): JSX.Element {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I am</h5>
                <h1>Anna</h1>
                <h5 className="text-light">Full-Stack Developer</h5>
                <ActionButtons />
                <Icons />

                <div className="photo">
                    place your photo here
                    {/* <img src={photo} alt="profile-pic" /> */}
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;
