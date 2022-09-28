import styles from './PreviewAccount.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function PreviewAccount({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image src={data.avatar} alt="nickname" className={cx('avatar')} />
                <Button primary className={cx('btn-follow')}>
                    Follow
                </Button>
            </div>
            <div className={cx('info-account')}>
                <p className={cx('nickname')}>
                    {data.first_name + data.last_name}
                    {data.tick && <FontAwesomeIcon className={cx('name-icon')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{data.nickname}</p>
            </div>
            <p className={cx('analytics')}>
                <span className={cx('analytics-follow')}>1.1M</span>
                <span className={cx('label-follow')}>Followers</span>
                <span className={cx('analytics-like')}>22.1M</span> <span className={cx('label-like')}>Likes</span>
            </p>
        </div>
    );
}

export default PreviewAccount;
