import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className='Navbar'>
             <Link to='/'><h1 className='header'>HotGist😋</h1></Link>
            <div className='links'>
                <Link to="/" className='Link' >Home</Link>
                <Link to="/services"  className='Link'>Services</Link>
                <Link to="/create"  className='Link' id='active' >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar
