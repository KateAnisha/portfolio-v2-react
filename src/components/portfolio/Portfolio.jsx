import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-container">
                <div className="portfolio-item">
                    <h3>Test Name</h3>
                    <img src="assets/portfolio.jpeg" alt="portfolio" />
                </div>

                <div className="portfolio-item">
                    <h3>Test Name</h3>
                    <img src="assets/portfolio.jpeg" alt="portfolio" />
                </div>

                <div className="portfolio-item">
                    <h3>Test Name</h3>
                    <img src="assets/portfolio.jpeg" alt="portfolio" />
                </div>
            </div>
        </div>
    )
}
