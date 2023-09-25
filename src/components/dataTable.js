import React from 'react'

import DataTable from 'react-data-table-component';

const columns= [
{name: 'id', selector: row=> row.id, sortable: true }, 
{name: 'user_name', selector: row=> row.user_name, sortable: true }, 
{name: 'age', selector: row=> row.age, sortable: true }
];

const data = [
{id: 1, user_name: 'Ann', age:19 }, 
{id: 2, user_name: 'Ariel', age: 23}
];

function DataTableComponent(){
    return (
<div>
<DataTable columns={columns} data={data} selectableRows/>
</div>)
    }

export default DataTableComponent;