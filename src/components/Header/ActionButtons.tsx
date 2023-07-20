import cv from '../../assets/my-cv.pdf'

function ActionButtons(): JSX.Element {
    return (
        <header>
            <div className="action-buttons">
                <a href={cv} download className='button'>Download CV</a>
                <a href="#contact" className='button button-primary'>Send a Message</a>
            </div>
        </header>
    );
}

export default ActionButtons;

