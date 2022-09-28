import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer-container')}>
            <div className={cx('footer-item')}>
                <Link className={cx('footer-link')} to={''}>
                    About
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    TikTok Browse
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Newsroom
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Contact
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Careers
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    ByteDance
                </Link>
            </div>
            <div className={cx('footer-item')}>
                <Link className={cx('footer-link')} to={''}>
                    TikTok for Good
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Advertise
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Developers
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Transparency
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    TikTok Rewards
                </Link>
            </div>
            <div className={cx('footer-item')}>
                <Link className={cx('footer-link')} to={''}>
                    Help
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Safety
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Terms
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Privacy
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Creator Portal
                </Link>
                <Link className={cx('footer-link')} to={''}>
                    Community Guidelines
                </Link>
            </div>
            <span className={cx('copyright')}>© 2022 TikTok</span>
        </div>
    );
}

export default Footer;
