
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';


// import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

    return (

        < div className='navbar' >
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />

                </div>
                <div className="items">
                    <div className="item">

                        English
                    </div>


                    <div className="item">
                        <div className="login">LOGIN</div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Navbar