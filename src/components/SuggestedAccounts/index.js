import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';

import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ title, data, seeMore, handleSee }) {
    const [see, setSee] = handleSee; // lấy 2 phần tử đầu vị trí 0 và 1 (destructuring)
    const handleSeeMore = () => {
        if (see) {
            setSee(false);
        } else {
            setSee(true);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{title}</p>
            <div className={cx('body')}>
                {data.map((user) => (
                    <AccountItem key={user.id} data={user} />
                ))}
            </div>

            <div className={cx('see-more')} onClick={handleSeeMore}>
                {seeMore}
            </div>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
