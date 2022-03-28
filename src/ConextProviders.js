import {
  ProductProvider,
  WishlistProvider,
  CartProvider,
  AuthProvider,
} from "context";

function ContextProvider({children}) {
  return (
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ProductProvider>
  );
}

export { ContextProvider };
