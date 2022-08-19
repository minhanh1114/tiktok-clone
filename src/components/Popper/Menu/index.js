import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wapper as PopperWapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, data = [] }) {
    const [history, setHistory] = useState([{ items: data }]); // set giá trị initial là 1 mảng với phần tử đầu tiên là 1 object với key(items) value là mảng data
    const current = history[history.length - 1]; // lấy phàn tử cuối cùng của mảng history
    return (
        <Tippy
            delay={[0, 600]}
            interactive
            offset={[15, 8]} //chiều ngang, chiều cao
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWapper className={cx('menu-prop')}>
                        {history.length > 1 && (
                            <Header
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {current.items.map((item, index) => {
                            const isParent = item.children;
                            return (
                                <MenuItem
                                    key={index}
                                    items={item}
                                    onClick={() => {
                                        if (isParent) {
                                            setHistory((prev) => [...prev, item.children]);
                                        }
                                    }}
                                />
                            );
                        })}
                    </PopperWapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
