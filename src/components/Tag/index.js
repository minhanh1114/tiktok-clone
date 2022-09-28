import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tag.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Tag({ title, icon }) {
    return (
        <Link className={cx('tag')} to={`tag/${title}`}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </Link>
    );
}
Tag.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default Tag;
