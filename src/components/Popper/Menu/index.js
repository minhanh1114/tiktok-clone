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
    const current = history[history.length - 1]; // lấy phàn tử cuối cùng của mảng history để set lên menu (mục đích luôn sử dụng phần tử cuối của mảng để render ra ngoài, vì khi lick vào phần tử có phần tử con, n sẽ add thêm vào mảng history)
    return (
        <Tippy
            hideOnClick={false}
            delay={[0, 600]}
            interactive
            offset={[15, 8]} //chiều ngang, chiều cao
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWapper className={cx('menu-prop')}>
                        {history.length > 1 && (
                            <Header // thêm header phía trên cho languages
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}

                        <div className={cx('menu-body')}>
                            {current.items.map((item, index) => {
                                const isParent = item.children;
                                return (
                                    <MenuItem
                                        key={index}
                                        items={item}
                                        onClick={() => {
                                            if (isParent) {
                                                setHistory((prev) => [...prev, item.children]); // sét thêm phần tử con vào history tạo thành 1 mảng với 2 phần tử
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </PopperWapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))} // khi menu bị bị ẩn sẽ trở về mảng ban đầu (cắt)
        >
            {children}
        </Tippy>
    );
}

export default Menu;
