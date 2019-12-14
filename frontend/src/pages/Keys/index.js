import React, { useEffect, useState } from 'react';
import api3 from '../../services/api3';


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

        console.log(keys);
        console.log(reserves);

    }, []);

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
                        <br/><br/>
                        <span>
                            <strong>Sala  {key.sala}</strong>
                            <br/>
                            <strong>Descrição:  </strong>  {key.descricao}
                            <br/>               
                            {/* <strong>xablau:  </strong> {filterByKey(key.id)} */}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}