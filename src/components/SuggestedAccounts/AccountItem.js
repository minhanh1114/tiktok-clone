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
                <PreviewAccount />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom-start" render={renderPreview}>
                <Link to={`/@123`} className={cx('account-item')}>
                    <Image
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/922058a41c933e9bd8bb7f6e287e03b9.jpeg?x-expires=1662397200&x-signature=YP5suZ3yurGjSOW%2FGQ0dCkFBcPI%3D"
                        alt="nickname"
                        className={cx('avatar')}
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            Netflixid <FontAwesomeIcon className={cx('name-icon')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}> Netflixid Indonesia</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
