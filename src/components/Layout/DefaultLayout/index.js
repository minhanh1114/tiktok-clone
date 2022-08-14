import Header from '../components/Header';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="Container">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
