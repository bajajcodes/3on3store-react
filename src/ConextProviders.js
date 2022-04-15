import {
  ProductProvider,
  WishlistProvider,
  CartProvider,
  AuthProvider,
  AlertProvider,
} from "context";

function ContextProvider({ children }) {
  return (
    <ProductProvider>
      <AlertProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </AlertProvider>
    </ProductProvider>
  );
}

export { ContextProvider };
