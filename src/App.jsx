import styled from "styled-components";
import ProductList from "./productList";
import Cart from "./cart";

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f1f5f9; /* Light greyish blue */
  display: grid;
  grid-template-columns: 1fr 350px; /* Products take most space, Cart is a sidebar */
  gap: 20px;
  padding: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* Stack on mobile */
  }
`;

function App() {
  return (
    <AppContainer>
      <ProductList />
      <Cart />
    </AppContainer>
  );
}

export default App;
