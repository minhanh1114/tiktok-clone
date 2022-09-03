import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{title}</p>
            <div className={cx('body')}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
            <div className={cx('see-more')}>See all</div>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
