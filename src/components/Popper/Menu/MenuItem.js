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

export default MenuItem;
