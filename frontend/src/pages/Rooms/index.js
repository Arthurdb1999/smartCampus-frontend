import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import api2 from '../../services/api2';


export default function Computers() {


    useEffect(() => {
        async function handleResearchRoom() {
            const response = await api2.post('/rooms', {
                "start_time": "1676119600",
                "end_time": "1576205940",
            });
        }

        handleResearchRoom();

        console.log(response.data);
    }, []);
   
    return (
        
        <>
            <h4>aaaa{handleResearchRoom()}</h4>
        </>
    );
}