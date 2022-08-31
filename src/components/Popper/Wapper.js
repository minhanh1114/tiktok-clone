import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(Styles);
function Wapper({ children, className }) {
    return <div className={cx('wapper', className)}>{children}</div>;
}
Wapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wapper;
