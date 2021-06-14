import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-container">
                <a href="https://github.com/KateAnisha/Slayers-Marketplace" target="_blank" rel="noreferrer">
                    <div className="portfolio-item">
                        <h3>Slayerz</h3>
                        <img src="assets/slayerz.png" alt="portfolio" />
                    </div>
                </a>

                <a href="http://www.rogerferrier.legal/" target="_blank" rel="noreferrer">
                    <div className="portfolio-item">
                        <h3>Roger Ferrier Law</h3>
                        <img src="assets/rfl.png" alt="portfolio" />
                    </div>
                </a>

                <a href="https://radiancebeautybar.com.au/" target="_blank" rel="noreferrer">
                    <div className="portfolio-item">
                        <h3>Radiance Beauty Bar</h3>
                            <img src="assets/rbb.png" alt="Radiance Beauty Bar" />
                        </div>
                </a>
            </div>
        </div>
    )
}
