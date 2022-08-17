import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';

const cx = classNames.bind(Styles);
function Wapper({ children }) {
    return <div className={cx('wapper')}>{children}</div>;
}

export default Wapper;
