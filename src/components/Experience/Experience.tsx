import "./Experience.css";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function Experience(): JSX.Element {
    return (
        <section id="experience">
            <h5>What I Can Do</h5>
            <h2>My Skills</h2>

            <div className="container experience_container">
                <div className="experience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>TypeScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience-backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <CheckCircleOutlineOutlinedIcon className="experience_details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
