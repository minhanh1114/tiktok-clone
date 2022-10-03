import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import Tag from '~/components/Tag';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Footer from './Footer';
import * as SuggestService from '~/Services/suggestUsersService';
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
    const [userSuggest, setUserSuggest] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            if (!seeAll) {
                const results = await SuggestService.suggestUser(1, 5);
                setUserSuggest(results);
            } else {
                const results = await SuggestService.suggestUser(1, 15);
                setUserSuggest(results);
            }
        };
        fetchApi();
    }, [seeAll]);

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
            {/* truyền dự liệu là 1 mảng sang comp khác data ={userSuggest} */}
            <SuggestedAccounts
                title="Suggested accounts"
                data={userSuggest}
                seeMore={seeAll ? 'See less' : 'See all'}
                handleSee={[seeAll, setSeeAll]}
            />
            {/* comp folowing account */}
            {/* <SuggestedAccounts
                title="Following Accounts"
                data={userSuggest}
                seeMore="See more"
                handleSee={[seeAll, setSeeAll]}
            /> */}
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
