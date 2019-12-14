import React, { useEffect, useState } from 'react';
import api3 from '../../services/api3';
import './styles.css';


export default function Keys() {

    const [keys, setKeys] = useState([]);
    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        async function handleKeys() {
            const response = await api3.get('/chaves');
            const response2 = await api3.get('/retiradas');
            setKeys(response.data);
            setReserves(response2.data);
        }

        handleKeys();

    });

    // function filterByKey(id){
    //     console.log(id)
    //     return reserves.filter(reserve => {
    //         return reserve.indexOf(id);
    //     })
    // }
   
    return (
        <>
            <ul className="keys-list">
                {keys.map(key => (
                    <li key={key.id}>
                        <span>
                            <strong>{key.sala}</strong>
                            <br/>
                            <strong>Descrição: </strong>{key.descricao}
                            <br/>
                            {/* <strong>retirada/devolvida:  </strong> {filterByKey(key.id)} */}
                            <strong>Retirada / Devolvida: </strong>
                            <br/><br/><br/> 
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}