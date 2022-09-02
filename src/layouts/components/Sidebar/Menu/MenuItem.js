import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, iconActive }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon-menu')}>{icon}</span>
            <span className={cx('icon-menu-active')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired, // dùng node vì là thành phần có thể render được
};
export default MenuItem;
// navlink so sánh link trình duyệt xem có trùng cới path ở navlink k ? -> sau đó thêm active nếu trùng path
// navlink thêm class thường vào thể, và vì có css module nên nà k áp dc css vì vậy phải custom

// sử dụng callback trong class name , khi NavLink đc kích hoạt trả về nav, và cái 'nav.isActive' sẽ là true, khi đó class active sẽ dc thêm vào thẻ.
// kết hợp kích hoạt của navlink và className có object {{ active: nav.isActive }}
