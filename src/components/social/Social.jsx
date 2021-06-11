import './social.scss'


export default function social() {
    return (
        <div className="sticky-social">
            <div className="social-container">
            <a href="https://twitter.com/KateAnisha" class="icon-hover" target="_blank" rel="noreferrer">
                <img src="assets/twitter.svg" alt="twitter link" className="icons"></img>
                <img src="assets/twitter-hover.svg" alt="github link" className="icons"></img>
            </a>

            <a href="https://github.com/KateAnisha" class="icon-hover" target="_blank" rel="noreferrer">
                <img src="assets/github.svg" alt="github link" className="icons"></img>
                <img src="assets/github-hover.svg" alt="github link" className="icons"></img>
            </a>

            <a href="https://www.linkedin.com/in/kate-brandley-767b85116/" class="icon-hover" target="_blank" rel="noreferrer">
                <img src="assets/linked-in.svg" alt="Linkedin link" className="icons linkedin"></img>
                <img src="assets/linked-in-hover.svg" alt="github link" className="icons linkedin"></img>
            </a>
            
            </div>
        </div>
    )
}
