import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import * as SuggestService from '~/Services/suggestUsersService';
const cx = classNames.bind(styles);
function SuggestedAccounts({ title }) {
    const [userSuggest, setUserSuggest] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            if (!seeAll) {
                const results = await SuggestService.suggestUser(1, 5);
                setUserSuggest(results);
            } else {
                const results = await SuggestService.suggestUser(1, 15);
                setUserSuggest(results);
            }
        };
        fetchApi();
    }, [seeAll]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{title}</p>
            <div className={cx('body')}>
                {userSuggest.map((user) => (
                    <AccountItem key={user.id} data={user} />
                ))}
            </div>
            {!seeAll ? (
                <div
                    className={cx('see-more')}
                    onClick={() => {
                        setSeeAll(true);
                    }}
                >
                    See all
                </div>
            ) : (
                <div
                    className={cx('see-more')}
                    onClick={() => {
                        setSeeAll(false);
                    }}
                >
                    See less
                </div>
            )}
        </div>
    );
}
SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
