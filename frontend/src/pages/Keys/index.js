import React, { useEffect, useState } from 'react';
import api3 from '../../services/api3';


export default function Keys() {

    const [keys, setKeys] = useState([]);

    useEffect(() => {
        async function handleKeys() {
            const response = await api3.get('/chaves');
            setKeys(response.data);
        }

        handleKeys();

    }, [keys]);
   
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
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}