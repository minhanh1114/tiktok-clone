import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);
function AccountItem({ data }) {
    console.log('item', data);
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span className={cx('name-lable')}>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('name-icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
