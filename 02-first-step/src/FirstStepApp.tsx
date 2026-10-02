import { ItemCounter } from "./shopping-cart/ItemCounter";

interface itemInCart {
  productName: string;
  quantity?: number;
}

const itemInCart: itemInCart[] = [
  { productName: "Nintendo Switch", quantity: 1 },
  { productName: "COD", quantity: 2 },
  { productName: "MC", quantity: 4 },
];

export function FirstStepApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {itemInCart.map(({productName, quantity}) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Nintendo " quantity={2} />
      <ItemCounter name="COD" quantity={3} />
      <ItemCounter name="MC" quantity={6} />
      <ItemCounter name="MC2" quantity={6} /> */}
    </>
  );
}
