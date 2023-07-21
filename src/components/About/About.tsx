import "./About.css";
import about from '../../assets/me.jpg'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

function About(): JSX.Element {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={about} alt="about-image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <SchoolOutlinedIcon className="about_icon" />
                            <h5>Education</h5>
                            <small>Moscow State University</small>
                            <small>John Bryce College</small>
                        </article>

                        <article className="about_card">
                            <EmojiEventsOutlinedIcon className="about_icon" />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        <article className="about_card">
                            <TipsAndUpdatesOutlinedIcon className="about_icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, veniam quibusdam perferendis modi illo cupiditate impedit labore harum sunt fugit expedita vel neque eos corrupti excepturi ipsum laudantium quas praesentium a sint corporis atque quae ex? Laboriosam, fugiat culpa magnam error harum iusto quos ducimus debitis modi aspernatur eos ea.</p>

                    <a href="#contact" className="button button-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;
