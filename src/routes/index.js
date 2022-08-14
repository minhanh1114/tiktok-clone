import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

// k cần đăng nhập vẫn xem dc  (public Route)
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
// cần phải đăng nhập mới vào dc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
