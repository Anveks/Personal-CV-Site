import "./Navigation.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import { useState } from "react";

function Navigation(): JSX.Element {

    const [active, setActive] = useState('#')

    return (
        <nav>
            {/* home */}
            <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><HomeOutlinedIcon /></a>
            {/* about */}
            <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><PersonOutlineOutlinedIcon /></a>
            {/* experience */}
            <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><MenuBookOutlinedIcon /></a>
            {/* services */}
            <a href="#services" onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}><HandshakeOutlinedIcon /></a>
            {/* portfolio
            <a href="#portfolio"><HomeOutlinedIcon /></a> */}
            {/* contact */}
            <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><LocalPostOfficeOutlinedIcon /></a>
        </nav>
    );
}

export default Navigation;
