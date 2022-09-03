import styles from './PreviewAccount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function PreviewAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/922058a41c933e9bd8bb7f6e287e03b9.jpeg?x-expires=1662397200&x-signature=YP5suZ3yurGjSOW%2FGQ0dCkFBcPI%3D"
                    alt="nickname"
                    className={cx('avatar')}
                />
                <Button primary className={cx('btn-follow')}>
                    Follow
                </Button>
            </div>
            <div className={cx('info-account')}>
                <p className={cx('nickname')}>
                    Netflixid <FontAwesomeIcon className={cx('name-icon')} icon={faCheckCircle} />{' '}
                </p>
                <p className={cx('name')}>Netflixid Indonesia</p>
            </div>
            <p className={cx('analytics')}>
                <span className={cx('analytics-follow')}>1.1M</span>{' '}
                <span className={cx('label-follow')}>Followers</span>
                <span className={cx('analytics-like')}>22.1M</span> <span className={cx('label-like')}>Likes</span>
            </p>
        </div>
    );
}

export default PreviewAccount;
