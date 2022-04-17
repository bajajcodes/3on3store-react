import "./singleproduct.styles.css";
import { Header, Footer, Card, LinkButton, Loader } from "components";
import { useParams } from "react-router-dom";
import { useProducts } from "context";
import { useEffect, useState } from "react";

function Product() {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState("");
  const params = useParams();
  const { getProduct } = useProducts();

  useEffect(async () => {
    const productId = params?.productId;
    if (productId) {
      const { product, exception } = await getProduct(productId);
      setLoader(false);
      setProduct(product);
    }
  }, []);

  return (
    <div className="single-product-container">
      <Header />
      <div className="single-product">
        {loader && <Loader display="flex" message="Product" />}
        {product === null && <Loader /> && (
          <h2>
            Product does not exsist in database, meanwhile click below and
            Browse More products 😁 !!{" "}
          </h2>
        )}
        {product && <Card product={product} isDescNeeded={true} />}
        {!loader && <LinkButton to="/products" text="Browse More" />}
      </div>
      <Footer />
    </div>
  );
}

export { Product };
