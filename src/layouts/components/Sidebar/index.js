import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import Tag from '~/components/Tag';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Footer from './Footer';
import {
    TagIcon,
    MusicIcon,
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts title="Suggested Accounts" />

            <div className={cx('discover')}>
                <p className={cx('title')}>Discover</p>
                <div className={cx('tag-icon__container')}>
                    <Tag icon={<TagIcon />} title="suthatla" />
                    <Tag icon={<TagIcon />} title="mackedoi" />
                    <Tag icon={<TagIcon />} title="sansangthaydoi" />
                    <Tag icon={<MusicIcon />} title="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media" />
                    <Tag
                        icon={<MusicIcon />}
                        title="Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng"
                    />
                    <Tag icon={<MusicIcon />} title="Thiên Thần Tình Yêu - RICKY STAR" />
                    <Tag icon={<TagIcon />} title="7749hieuung" />
                    <Tag icon={<TagIcon />} title="genzlife" />
                    <Tag icon={<MusicIcon />} title="Tình Đã Đầy Một Tim - Huyền Tâm Môn" />
                    <Tag icon={<MusicIcon />} title="Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham" />
                </div>
            </div>
            <Footer />
        </aside>
    );
}

export default Sidebar;
