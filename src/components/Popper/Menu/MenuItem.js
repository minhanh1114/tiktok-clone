import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ items }) {
    return (
        <Button className={cx('menu-item')} lefticon={items.icon} to={items.to}>
            {items.title}
        </Button>
    );
}

export default MenuItem;
