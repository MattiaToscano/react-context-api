
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
                    {links.map((link) => {
                        return (
                            <li className='mx-2'>
                                <NavLink to="/posts" className="nav-link">Posts</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>

    )

}

export default MainNavbar