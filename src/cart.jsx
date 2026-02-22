import { useCartStore } from "./store/cartStore";
import styled from "styled-components";

// --- Styled Components ---

const CartWrapper = styled.div`
  background: white;
  padding: 25px;
  border-radius: 20px;
  height: fit-content;
  position: sticky;
  top: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
  color: #1e293b;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f1f5f9;

  /* Bin-shof el kalam koways hena */
  .item-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .item-name {
    color: #1e293b;
    font-weight: 600;
    font-size: 1rem;
  }

  .item-qty {
    color: #64748b;
    font-size: 0.85rem;
    background: #f1f5f9;
    padding: 2px 8px;
    border-radius: 6px;
    width: fit-content;
  }
`;

const RemoveBtn = styled.button`
  background: #fee2e2;
  color: #ef4444;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background: #ef4444;
    color: white;
  }
`;

const ClearBtn = styled.button`
  width: 100%;
  background: #475569;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 12px;
  margin-top: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1e293b;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 0;
  color: #94a3b8;
  font-style: italic;
`;

// --- Component Logic ---

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  // Calculate total items (sum of all quantities)
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <CartWrapper>
      <Title>
        My Cart 🛒
        {totalItems > 0 && (
          <span style={{ fontSize: "1rem", color: "#3b82f6" }}>
            {totalItems} Items
          </span>
        )}
      </Title>

      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-qty">Quantity: {item.quantity}</span>
              </div>
              <RemoveBtn onClick={() => removeFromCart(item.id)}>
                Remove 1
              </RemoveBtn>
            </CartItem>
          ))}

          <ClearBtn onClick={clearCart}>Clear Everything</ClearBtn>
        </>
      ) : (
        <EmptyState>
          <p>Your cart is empty 💨</p>
          <p style={{ fontSize: "0.8rem" }}>Start adding some products!</p>
        </EmptyState>
      )}
    </CartWrapper>
  );
}

export default Cart;
