import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wapper as PopperWapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { click } from '@testing-library/user-event/dist/click';

const cx = classNames.bind(styles);
function Search() {
    const refInput = useRef();

    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 1000);
    }, []);
    const clickClear = () => {
        setSearchText('');
        setSearchResult([]);
        refInput.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWapper>
                        {searchResult.map((search, index) => (
                            <li key={index}>{search}</li>
                        ))}
                        <p className={cx('lable-search-acount')}>Accounts</p>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchText}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    ref={refInput}
                    onFocus={() => setShowResult(true)}
                    onChange={(event) => setSearchText(event.target.value)}
                />
                {searchText && (
                    <button className={cx('clear')} onClick={clickClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
