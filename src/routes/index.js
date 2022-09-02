import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

// k cần đăng nhập vẫn xem dc  (public Route)
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];
// cần phải đăng nhập mới vào dc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
