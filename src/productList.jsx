import { useCartStore } from "./store/cartStore";
import { PRODUCTS } from "./products";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductName = styled.h3`
  margin: 0 0 10px 0;
  color: #1e293b;
`;

const Description = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  flex-grow: 1;
`;

const AddBtn = styled.button`
  background: #10b981; /* Green success color */
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background: #059669;
  }
`;

function ProductList() {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      <h1 style={{ color: "#1e293b", marginBottom: "30px" }}>
        Store Products 🛒
      </h1>
      <Grid>
        {PRODUCTS.length > 0 ? (
          PRODUCTS.map((item) => (
            <ProductCard key={item.id}>
              <ProductName>{item.name}</ProductName>
              <Description>{item.description}</Description>
              <AddBtn onClick={() => addToCart(item)}>Add to Cart</AddBtn>
            </ProductCard>
          ))
        ) : (
          <p>No products available</p>
        )}
      </Grid>
    </div>
  );
}

export default ProductList;
