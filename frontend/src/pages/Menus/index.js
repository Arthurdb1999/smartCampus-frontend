import React, { useEffect, useState } from 'react';
import api2 from '../../services/api2';
import './styles.css';


export default function Menus() {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        async function handleMenus() {
            const response = await api2.get('/cardapios');
            setMenus(response.data);
        }

        handleMenus();

    });

    return (
        <div className="container">
            <ul className="menus-list">
                {menus.map(menu => (
                    <li key="id">
                        <span>
                            <strong>{menu.dia}/{menu.mes}/{menu.ano}</strong>
                            <br/><br/>
                            - {menu.primeiroPrato}<br/>
                            - {menu.segundoPrato}<br/>
                            - {menu.terceiroPrato}<br/>
                            - {menu.quartoPrato}<br/>
                            - {menu.quintoPrato}<br/>
                            - {menu.sextoPrato}<br/>
                            - {menu.setimoPrato}<br/>
                            <br/><br/>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}