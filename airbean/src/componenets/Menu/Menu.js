import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'
import Styles from './Menu.module.css'
import add from '../../assets/graphics/add.svg'
import bag from '../../assets/graphics/bag.svg'
import navIcon from '../../assets/graphics/navicon.svg'
import addBeverage from '../../actions/addBeverage'
import { useDispatch, useSelector } from 'react-redux'
import HamburgerMenu from '../Hamburger-menu/HamburgerMenu'
import Cart from '../Card/Card'


function Menu() {
    const beveragesState = useSelector(state => {
        return state.beverages;
    })
    const dispatch = useDispatch()
    const [menuData, setMenuData] = useState([]);
    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/beans`);
        const data = await response.json();
        setMenuData(data.menu)

    }, [])

    return (
        <>
            <div className={Styles.menuContainer}>
                <div className={Styles.headerContainer}>
                    <HamburgerMenu />
                    <div>
                        <span> {beveragesState.length}</span>
                        <img className={Styles.imgBag} src={bag}></img>
                    </div>
                </div>
                <h1> Meny</h1>
                <ul className={Styles.dataLista}>
                    {menuData.map((item) => {
                        return (
                            <li className={Styles.listItem} key={item.id}>
                                <div>
                                    <img className={Styles.imgPlus} onClick={() => {
                                        dispatch(addBeverage(item))
                                    }} src={add}></img>
                                </div>
                                <div>
                                    <span>{item.title}</span>
                                    <span>{item.price}</span>
                                    <h6>{item.desc}</h6>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </>

 )}

export default Menu;


