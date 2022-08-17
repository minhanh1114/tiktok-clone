import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wapper as PopperWapper } from '~/components/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
function Menu({ children, data = [] }) {
    return (
        <Tippy
            delay={[0, 600]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWapper className={cx('menu-prop')}>
                        {data.map((item, index) => (
                            <MenuItem key={index} items={item} />
                        ))}
                    </PopperWapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
