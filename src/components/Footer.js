import { LOGO_URL, SOCIAL_MEDIA_ICON_URL } from '../utils/constants';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="footer-line"></div>
                <div className="footer-sub-section">
                    <div className="fill-logo">
                        <a href="/">
                            <img width="45" height="45" alt="" src={LOGO_URL} />
                        </a>
                    </div>
                    <div className="copy-rigth-text">© 2023 Big Burger</div>
                    <div>
                        <a className="social-media-logo" href="https://www.facebook.com/swiggy.in" rel="nofollow noopener" alt="facebook" target="_blank">
                            <img width="24" height="24" alt="" src={SOCIAL_MEDIA_ICON_URL + 'icon-facebook_tfqsuc'} />
                        </a>
                        <a className="social-media-logo" href="https://pinterest.com/swiggyindia" rel="nofollow noopener" alt="pintrest" target="_blank">
                            <img width="24" height="24" alt="" src={SOCIAL_MEDIA_ICON_URL + 'icon-pinterest_kmz2wd'} />
                        </a>
                        <a className="social-media-logo" href="https://instagram.com/swiggyindia/" rel="nofollow noopener" alt="instagram" target="_blank">
                            <img width="24" height="24" alt="" src={SOCIAL_MEDIA_ICON_URL + 'icon-instagram_b7nubh'} />
                        </a>
                        <a className="social-media-logo" href="https://twitter.com/swiggy" rel="nofollow noopener" alt="twitter" target="_blank">
                            <img width="24" height="24" alt="" src={SOCIAL_MEDIA_ICON_URL + 'icon-twitter_gtq8dv'} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;