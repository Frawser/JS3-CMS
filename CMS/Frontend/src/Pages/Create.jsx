import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";



const Create = () => {
  
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Get the values of the form inputs
      const name = document.getElementById("name").value;
      const description = document.getElementById("description").value;
      const price = document.getElementById("price").value;
      const imageURL = document.getElementById("imageURL").value;
      
    
      // Create an object with the data
      const productData = {
        name,
        description,
        price,
        imageURL
      };
    
      // Convert the object to a JSON string
      const productJSON = JSON.stringify(productData);
    
      // Use the JSON data in your fetch request
      const res = await fetch("http://localhost:7777/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: productJSON
      });
      const data = await res.json();
      console.log(data);
      navigate("/products");
    };

    

  return (
    <div className="container">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description</label>
          <input type="text" className="form-control" id="description" />
          </div>
          <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price</label>
          <input type="text" className="form-control" id="price" />
          </div>
          <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">Product Image</label>
          <input type="text" className="form-control" id="imageURL" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Create;