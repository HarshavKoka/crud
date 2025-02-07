
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { deleteData, getData, putData, postData } from './api';
import { useEffect, useState } from 'react';
import ProductForm from "./form";
import Product from "./Product";

const App = () => {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [initialForm, setForm] = useState({ name: '', price: '', category: '' })
  useEffect(() => {
    getAllProducts();
  }, [])

  async function getAllProducts() {
    const response = await getData();
    setProducts(response.data);
  }
  async function addProduct(product) {
    let data = {
      name: product.name,
      price: product.price,
      category: product.category
    }
    if (edit)
      await putData(product.id, data);
    else
      await postData(data);
    getAllProducts();
    setOpenForm(false);


  }
  let deleteProduct = async (id) => {
    console.log(id)
    await deleteData(id);

    setProducts(products.filter(p => p.id !== id));
  };


  function editProduct(value) {
    setEdit(true);
    setOpenForm(true);
    setForm(value)

  }
  function closeForm() {
    setOpenForm(false)
  }
  function showForm() {
    setForm({ name: '', price: '', category: '' })
    setOpenForm(true);
    setEdit(false);

  }

  return (

    <div className="wrapper m-5 w-50">
      <h2 className="text-primary text-center">CRUD Operations with React JS</h2>
      <button className="btn btn-primary float-end" onClick={() => { showForm() }}>Add new</button>
      <Product products={products} deleteProduct={deleteProduct} editProduct={editProduct}></Product>
      {openForm && <ProductForm addProduct={addProduct} data={initialForm} close={closeForm}  ></ProductForm>}
    </div>

  )

};

export default App;