import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className='Navbar'>
             <Link to='/'><h1 className='header'>HotGist😋</h1></Link>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar
