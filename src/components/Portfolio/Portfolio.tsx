import "./Portfolio.css";
import data from '../../utils/projects-data.json'
import ex_2 from '../../assets/example_1.jpg'
import ex_1 from '../../assets/example_2.png'
import ex_3 from '../../assets/example_3.jpg'

function Portfolio(): JSX.Element {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {/* {
                    data.map((e) =>
                        <div key={e.id} className="portfolio_item">
                            <div className="portfolio_item-image">
                                <img src={e.img} alt="preview-image" />
                            </div>
                            <h3>{e.title}</h3>
                            <a href={e.github} className="button" target="_blank">Github</a>
                        </div>)
                } */}
                <div className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={ex_1} alt="crypto-site" />
                    </div>
                    <h3>Crypto Currency Tracker Site</h3>
                    <a href="https://github.com/Anveks/JavaScript---JQuery--CryptoCurrency-Project" className="button" target="_blank">Github</a>
                </div>

                <div className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={ex_2} alt="vacations-site" />
                    </div>
                    <h3>Vacations Planner Site</h3>
                    <a href="https://github.com/Anveks/Vacations-Site-Full-Stack" className="button" target="_blank">Github</a>
                </div>

                <div className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={ex_3} alt="vacations-site" />
                    </div>
                    <h3>Real-time Chat App Site</h3>
                    <a href="https://github.com/Anveks/Messenger-Full-Stack" className="button" target="_blank">Github</a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
