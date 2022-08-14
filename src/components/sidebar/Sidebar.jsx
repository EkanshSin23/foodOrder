import React, { useContext } from 'react'
import './sidebar.scss'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import SearchIcon from '@mui/icons-material/Search';
import { DarkModeContext } from '../../context/darkMode';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className="top">

                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />

                </div>
            </div>
            <div className="center">
                <ul>
                    <li><MenuBookIcon className='sideicon' />MENU</li>
                    <li><RestaurantIcon className='sideicon' />RESTUARANTS</li>
                    <li><KebabDiningIcon className='sideicon' />DISHES</li>

                </ul>
            </div>
            <div className="bottom">
                <div className="light" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="dark" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar