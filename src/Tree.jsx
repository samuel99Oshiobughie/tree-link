import { Link } from "react-router-dom";
import profileLogo from './assets/supreme.png'
import shareButton from './assets/share-button.png'
import shareIcon from './assets/share-icon.png'
import slackIcon from './assets/slack.png'
import githubIcon from './assets/github.png'
import Footer from "./Footer";
import "./Tree.css";

const Tree = ( ) => {
    return (
        <div className="tree">
            <div className='container'>
                <div className="top-section">
                    <div>
                        <img src={profileLogo} alt="profile image" id="profile__img" width="88px" height="88px"/>
                    </div>
                    <div className="share_button">
                        <picture>
                            <source media="(max-width: 400px)" srcSet={shareIcon}/>
                            <img src={shareButton} alt="avatar share button"/>
                        </picture>
                    </div>
                </div>

                <div id="twitter">Black Dev</div>
                <div id="slack">BlackDev</div>

                <a href="https://twitter.com/BlackDev112" id="twitter__link" target="_blank" rel="noreferrer nooppener">Twitter Link</a>
                <a href="https://training.zuri.team/" id="btn__zuri" target="_blank" rel="noreferrer nooppener">Zuri Team</a>
                <a href="https://books.zuri.team/" id="books" target="_blank" rel="noreferrer nooppener" title="This is where you find books about design and coding">Zuri Books</a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=BlackDev" id="book__python" target="_blank" rel="noreferrer nooppener">Python Books</a>
                <a href="https://background.zuri.team/" id="pitch" target="_blank" rel="noreferrer nooppener" title="Connect you with certified programmers">Background Check for Coders</a>
                <a href="https://books.zuri.team/design-rules" id="book__design" target="_blank" rel="noreferrer nooppener" title='Become a design master, for free'>Design Books</a>
                 <Link className="contact-card" to="/contact"><a id="contact" >Contact</a></Link>
                <div className='social_section'>
                    <div><img src={slackIcon} alt="slack logo"/></div>
                    <a href='https://github.com/samuel99Oshiobughie'><img src={githubIcon} alt=" github logo"/></a>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Tree;
