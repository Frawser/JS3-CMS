import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]); //using useState hook to create products state variable as an array

  useEffect(() => {
    //using hook to fetch data from the API
    fetch("http://localhost:7777/api/products/") //using fetch to get all products from the API
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container d-flex row m-1">
        {products.map(
          (
            product //using map to go through the array and display products within html elements
          ) => (
            <div className="card m-1" key={product._id}>
              <Link to={`/products/${product._id}`}>
              <img src={product.imageURL} className="card-img-top"></img>
              </Link>
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">
                  PRICE: <span>{product.price} kr</span>
                </p>
                <h4 className="btn btn-outline-primary">
                  <Link to={`/products/${product._id}`}>Details</Link>
                </h4>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default Products;
