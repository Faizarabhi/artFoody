import { Sidebar, Navbar } from '../components';
import './layout.scss'

const Layout = ({ children }) => {
    return (
        <div className='container'>
            <Sidebar className='sidebar' />
            <main className="content">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default Layout;

