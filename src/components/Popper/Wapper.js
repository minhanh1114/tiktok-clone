import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';

const cx = classNames.bind(Styles);
function Wapper({ children, className }) {
    return <div className={cx('wapper', className)}>{children}</div>;
}

export default Wapper;
