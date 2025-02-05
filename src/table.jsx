import React from 'react';

const Table = ({ products, deleteProduct }) => {
    return (
        <table className='table m-3'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.category}</td>
                        <td>
                            <button className='btn btn-primary m-1'>Edit</button>
                            <button
                                className='btn btn-danger m-1'
                                onClick={() => deleteProduct(data.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ); 
};

export default Table;
