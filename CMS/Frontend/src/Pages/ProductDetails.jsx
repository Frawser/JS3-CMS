import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProductDetails = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

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
  // console.log(product)
  if (!product) {
    return <div>Loading...</div>;
  }

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
          <div className="details-container-2-2">
            <p>{product.price} kr</p>

            <button className="btn btn-outline-primary" onClick={() => removeProduct(product._id)}>
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
