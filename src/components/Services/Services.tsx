import "./Services.css";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

function Services(): JSX.Element {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container service_container">
                <article className="service">
                    <div className="service_head">
                        <h3>WEB Design</h3>
                    </div>
                    <ul className="service_list">
                        <li> <KeyboardArrowRightOutlinedIcon className="service_list-icon" /> <p>CSS Design</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /> <p>WEB Design</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /> <p>Animations</p> </li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Responsive Sites</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Reusable CSS Code</p></li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>WEB Development</h3>
                    </div>
                    <ul className="service_list">
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service_list">
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><KeyboardArrowRightOutlinedIcon className="service_list-icon" /><p>Lorem ipsum dolor sit amet.</p></li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Services;
