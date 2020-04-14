import React,  { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

export default function Kyselylist() {

    const [kyselyt, setKyselyt] = useState([]);


    useEffect(() => {
        getKyselyt();
    },[])

    const getKyselyt = async () => {
        try {
            let url = 'http://zoomerkysely.herokuapp.com/kyselys';
            const response = await fetch(url);
            const json = await response.json();
            setKyselyt(json);
            console.log(json);

        } catch (error) {
            console.error(error);
        }

    }

    const columns = [
        {
            Header: 'Nimi',
            accessor: 'nimi'
        },
        {
            Header: 'Tekijä',
            accessor: 'tekija'
        },
        {
            Header: 'Pvm',
            accessor: 'pvm'
        }
    ]

    return(
        <div>
            <ReactTable defaultPageSize={10} filterable={true}data={kyselyt} columns={columns} />
        </div>
    )
}
