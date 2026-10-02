import React, { type CSSProperties } from "react";

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {
  const MyCSS: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: 10,
  };

  return (
    <section style={MyCSS}>
      <span style={{ width: 150 }}>{name}</span>
      <button
        onClick={() => {
          console.log(`Click ${name}`);
        }}
      >
        +1
      </button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
