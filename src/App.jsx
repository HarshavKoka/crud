import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./table.jsx";
import Form from './form.jsx';
import './index.css';
import { getData, deleteData, postData } from './api';

function App() {
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data);
  };

  let deleteProducts = async (id) => {
    await deleteData(id);
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='wrapper m-5 w-50'>
      <h1 className='text-primary'>This is a CRUD example</h1>
      <button className='btn btn-primary' onClick={() => setOpenForm(true)}>Add Product</button>
      <Table products={products} deleteProduct={deleteProducts} post={postData} />
      {
        openForm && <Form close={() => setOpenForm(false)} />
      }
    </div>
  );
}

export default App;
