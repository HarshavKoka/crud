import React from 'react';

function Form(props) {
  const [product, setProduct] = useState(props.data);
  let changeFormData = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value })
  }
  return (
    <div className='form-overlay'>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type='text' name='name' placeholder='Enter Name' className="form-control mt-2" />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input className="form-control mt-2" type='number' name='price' placeholder='Enter Price' />
        </div>

        <div className="form-group">
          <label>Item:</label>
          <select className='form-control mt-2' name='category'>
            <option value="-1"></option>
            <option value="laptops">Laptops</option>
            <option value="mobiles">Mobiles</option>
            <option value="tv">TVs</option>
          </select>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-primary me-2" onClick={(e) => {
            e.preventDefault();
            props.close();
          }}>Send</button>

          <button className="btn btn-danger" onClick={(e) => {
            e.preventDefault();
            props.close();
          }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
