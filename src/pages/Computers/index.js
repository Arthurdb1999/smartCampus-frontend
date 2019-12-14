import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import socketio from 'socket.io-client';

import './styles.css';
import pc from '../../assets/pc.png';

export default function Computers() {

    const [computers, setComputers] = useState([]);
    //const [requests, setRequests] = useState([]);

    useEffect(() => {
        const socket = socketio('http://localhost:3000');

        socket.on('change_computer', data => {
            console.log(data);
        })
    }, [])

    useEffect(() => {
        async function handleResearchRoom() {
            const response = await api.get('/computers');
            setComputers(response.data);
        }

        handleResearchRoom();
    }, []);

    async function handleReserve(computer) {
        computer.disponivel = !computer.disponivel;
        await api.post('/computers', {
            computer: computer
        });
        const response = await api.get('/computers');
        setComputers(response.data);
    }
   
    return (
        <>
            <ul className="computers-list">
                {computers.map(computer => (
                    <li key={computer._id}>
                            <header>
                                <img src = {pc} alt = "pc"/>
                            </header>
                        <span>
                        <strong>{computer.idPc} - </strong>
                            {computer.disponivel === false && computer.montado === false
                                ? //then
                                'Indisponível'
                                : //else
                                computer.disponivel
                                    ? //then
                                    'Disponível'
                                    : //else
                                    'Ocupado'
                            }
                        </span>
                        <br></br>
                        {computer.disponivel === false && computer.montado === false
                            ? //then
                            <button className="btnComputerIndisponível" disabled>Ocupar</button>
                            : //else
                            computer.disponivel
                                ? //then
                                <button className="btnComputerDesocupado" onClick={() => handleReserve(computer)}>
                                    Ocupar
                                        </button>
                                : //else
                                <button className="btnComputerOcupado" onClick={() => handleReserve(computer)}>
                                    Desocupar
                                        </button>
                        }
                    </li>
                ))}
            </ul>
        </>
    );
}