/* eslint-disable no-lone-blocks */
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from '~/layouts';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout; //kiểm tra có route.layout k gán và Layout nếu là page mặc định gán là DefaultLayout, nếu k có lấy DefaultLayout, k gán là 1 thẻ ảo
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// ở trang App.js  này tạo ra cơ chế router sẽ có nội dung là các publicRouter mô tả như dưới,
// khi link (url)  là trang nào n sẽ sử dụng Route đó
{
    /* <Routes>
    <Route element ={....}/>
    <Route element ={....}/>
    <Route element ={....}/>
    ...............
</Routes>  */
}
