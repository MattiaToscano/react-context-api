import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const links = [
    {
        path: '/',
        label: 'Homepages',
    },

    {
        path: '/pages',
        label: 'Page',
    },

    {
        path: '/about',
        label: 'AboutUs',
    }
]

const MainNavbar = () => {
    return (
        <header>
            <nav>
                <ul className='list-unstyled d-flex justify content-space-beetween'>
                    {links.map((link, index) => {
                        return (
                            <li key={link.path} className='mx-2'>
                                <NavLink to={link.path} className="nav-link">{link.label}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>

    )

}

export default MainNavbar