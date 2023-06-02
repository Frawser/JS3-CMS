//import react components and hooks used in this page
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProductDetails = () => {
  //set states and variables used in this page
  const [price, setPrice] = useState(0);
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  //fetch product data from backend
  useEffect(() => {
    fetch(`http://localhost:7777/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }

  //update product price
  const updateProductPrice = async (id) => {
    const res = await fetch(`http://localhost:7777/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ price: price }),
    });
    const data = await res.json();
    console.log(data);
    navigate("/products");
  };

  //remove product
  const removeProduct = async (id) => {
    const res = await fetch(`http://localhost:7777/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    console.log(data);
    navigate("/products");
  };

  
  return (
    <>
      <div className="container d-flex mt-3">
        <div>
          <img src={product.imageURL} className=""></img>
        </div>
        <div className="details-container-2">
          <div className="details-container-2-1">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className="details-container-2-2 ">
            <p>{product.price} kr</p>
            {/* removes the loaded product */}
            <button
              className="btn btn-outline-primary mb-3"
              onClick={() => removeProduct(product._id)}
            >
              remove
            </button>
            <p>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Edit Price
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                {/* update product price */}
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                  placeholder="New Price"
                />
                <button
                  className="btn btn-primary m-1"
                  onClick={() => updateProductPrice(product._id)}
                >
                  Update Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
