import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import * as searchService from '~/Services/searchService';
import { useDebounce } from '~/hooks';
import { Wapper as PopperWapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Search() {
    const refInput = useRef();

    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchText, 500);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true); // kịch hoạt loading
            const results = await searchService.search(debouncedValue);
            setSearchResult(results);
            setLoading(false); // trả giá trị về thì ẩn loading
        };
        fetchApi();
    }, [debouncedValue]);
    const clickClear = () => {
        setSearchText('');
        setSearchResult([]);
        refInput.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleSubmit = (e) => {};
    const handleMouseDown = (event) => {
        event.preventDefault();
    };
    return (
        <HeadlessTippy
            // appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWapper>
                        <p className={cx('lable-search-acount')}>Accounts</p>
                        {searchResult.map((account) => (
                            <AccountItem key={account.id} data={account} />
                        ))}
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
                    onChange={(event) => {
                        if (!event.target.value.startsWith(' ')) {
                            setSearchText(event.target.value);
                        }
                    }}
                />
                {searchText && !loading && (
                    <button className={cx('clear')} onClick={clickClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} onClick={handleSubmit} onMouseDown={handleMouseDown}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
