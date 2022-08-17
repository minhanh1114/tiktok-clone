import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(Styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4cfaa5c14950b5d6fea7def263c50c7e~c5_300x300.webp?x-expires=1660842000&x-signature=XU7VbdxgztMSvjoG55MpOvircMk%3D"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span className={cx('name-lable')}>Halinhofficial</span>
                    <FontAwesomeIcon className={cx('name-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Ha Linh Official</span>
            </div>
        </div>
    );
}

export default AccountItem;
