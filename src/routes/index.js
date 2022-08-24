import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';

// k cần đăng nhập vẫn xem dc  (public Route)
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];
// cần phải đăng nhập mới vào dc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
