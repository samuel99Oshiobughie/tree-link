import profileLogo from './assets/supreme.png'
import shareButton from './assets/share-button.png'
import slackIcon from './assets/slack.png'
import githubIcon from './assets/github.png'
import vector from './assets/vector.png'
import I4G from './assets/I4G.png'
import "./Tree.css";

const Tree = ( ) => {
    return (
        <div className="tree">
            <div className='body'>
                <div className="top-section">
                    <div>
                        <img src={profileLogo} alt="profile image" id="profile_img" width="88px" height="88px"/>
                    </div>
                    <div className="share_button">
                        <img src={shareButton} alt="avatar share button"/>
                    </div>
                </div>

                <div id="twitter">Black Dev</div>
                <div id="slack">BlackDev</div>

                <div className="modal" id="twitter_link"><a href="https://twitter.com/BlackDev112"><span className='text'>Twitter Link</span></a></div>
                <div className="modal" id="btn_zuri"><a href="https://training.zuri.team/"><span className='text'>Zuri Team</span></a></div>
                <div className="modal" id='books'><a href="https://books.zuri.team/" title="This is where you find books about design and coding"><span className='text'>Zuri Books</span></a></div>
                <div className="modal" id='book_python'><a href="https://books.zuri.team/python-for-beginners?ref_id=BlackDev"><span className='text'>Python Books</span></a></div>
                <div className="modal" id="pitch"><a href="https://background.zuri.team/" title="Connect you with certified programmers"><span className='text'>Background Check for Coders</span></a></div>
                <div className="modal" id="book_design"><a href="https://books.zuri.team/design-rules" title='Become a design master, for free'><span className='text'>Design Books</span></a></div>
                <div className='social_section'>
                    <div><img src={slackIcon} alt="slack logo"/></div>
                    <div><a href='https://github.com/samuel99Oshiobughie'><img src={githubIcon} alt=" github logo"/></a></div>
                </div>
            <footer>
                <div className='zuri'>
                    <img src={vector} alt="zuri logo"/>
                    <div className='dot'/>
                </div>
                <div className='footer_text'>HNG Internship 9 Frontend Task</div>
                <div className='I4G'><img src={I4G} alt="I4G logo"/></div>
            </footer>
            </div>
        </div>
    )
}

export default Tree;
