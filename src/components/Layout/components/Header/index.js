import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import images from '~/assets/images';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Wapper as PopperWapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowUp,
    faUser,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

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
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 1000);
    }, []);

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
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="img_logo" />
                </div>
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWapper>
                                {searchResult.map((search, index) => (
                                    <li key={index}>{search}</li>
                                ))}
                                <p className={cx('lable-search-acount')}> Tai khoan</p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video " placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon icon={faPlus} />
                                <span className={cx('upload')}>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu data={currentUser ? MENU_USER : MENU_ITEMS}>
                        {currentUser ? (
                            <div>
                                <img
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/209cd75d867b19c0d17d74178d63bc0f~c5_100x100.jpeg?x-expires=1661004000&x-signature=tIbEMgQ3V90bCdmP9Yg1%2FJI%2FrdE%3D"
                                    className={cx('img-user')}
                                    alt="nguyen van a"
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
