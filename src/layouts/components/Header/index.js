import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import config from '~/config';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Languages',
            items: [
                { type: 'language', code: 'end', title: 'English' },
                { type: 'language', code: 'vi', title: 'Vietnamese' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;
    const MENU_USER = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
        },

        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        // Using a wrapper <div> in Component Search fix warning Tippy tag around the reference element solves
        // this by creating a new parentNode context
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="img_logo" />
                </Link>
                <div className={cx('search-parent')}>
                    <Search />
                </div>
                <div className={cx('action')}>
                    <Button text>
                        <FontAwesomeIcon icon={faPlus} />
                        <span className={cx('upload')}>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 150]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('active-message-icon')} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu data={currentUser ? MENU_USER : MENU_ITEMS}>
                        {currentUser ? (
                            <div>
                                <Image
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/6cc0badd10117384094ff503c0fca9d9~c5_100x100.jpeg?x-expires=1661180400&x-signature=X5Nkc4lA8keGyRjst3VveJlOpB8%3D"
                                    className={cx('img-user')}
                                    alt="nguyen van a"
                                    // customFallBack="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/64dedf6ebe11a4bd1cede32de3020172~c5_100x100.jpeg?x-expires=1661180400&x-signature=ihhiaz0W2vLwdex4DqnwiNv0jkw%3D"
                                />
                            </div>
                        ) : (
                            <span className={cx('more-menu')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </span>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
