import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

            <button className="btn btn-outline-primary">remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
