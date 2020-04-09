import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

export default function Kyselylist() {

    const [kyselyt, setKyselyt] = React.useState([]);


    React.useEffect(() => {
        getKyselyt();
    },[])

    const getKyselyt = () => {
        fetch('http://zoomerkysely.herokuapp.com/kyselys')
        .then(response => response.json())
        .then(data => setKyselyt(data.kysymykset))
        .catch(err => console.error(err))
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
