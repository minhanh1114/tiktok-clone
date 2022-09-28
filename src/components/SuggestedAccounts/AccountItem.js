import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import config from '~/config';
import Image from '~/components/Image';
import { Wapper as PopperWrapper } from '~/components/Popper';
import PreviewAccount from './PreviewAccount';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <PreviewAccount data={data} />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom-start" render={renderPreview}>
                <Link to={`/@123`} className={cx('account-item')}>
                    <Image src={data.avatar} alt={data.last_name} className={cx('avatar')} />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            {data.first_name + data.last_name}
                            {data.tick && <FontAwesomeIcon className={cx('name-icon')} icon={faCheckCircle} />}
                        </h4>
                        <p className={cx('name')}>{data.nickname}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
