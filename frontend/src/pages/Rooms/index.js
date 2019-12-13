import React, { useEffect, useState } from 'react';
import api2 from '../../services/api2';


export default function Computers() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        async function handleResearchRoom() {
            const response = await api2.post('/getCourses', {
                start_time: 1676119600,
                end_time: 1576205940,
            });
            setRooms(response.data);
        }

        handleResearchRoom();

        console.log(rooms);
    }, []);
   
    return (
        
        <>
            
        </>
    );
}