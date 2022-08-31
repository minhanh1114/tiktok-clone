import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ items, onClick }) {
    const classses = cx('menu-item', { separate: items.separate });
    return (
        <Button className={classses} lefticon={items.icon} to={items.to} onClick={onClick}>
            {items.title}
        </Button>
    );
}
MenuItem.propTypes = {
    onClick: PropTypes.func,
    items: PropTypes.object.isRequired,
};

export default MenuItem;
