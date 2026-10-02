import type { CSSProperties } from "react";

export const MyAwesomeApp = () => {
  const firtsName = "Julio";
  const lastName = "Allendes";

  const favoriteGame = ["Minecraft", "COD"];
  const isActive = true;

  const address = {
    zipCode: "122",
  };

  const myStyles: CSSProperties = {
    backgroundColor: "red",
    borderRadius: 10,
    marginTop: 40,
  };

  return (
    <>
      <h1>{firtsName}</h1>
      <h3>{lastName}</h3>

      <p style={myStyles}>{favoriteGame.join(",")}</p>
      <h1>{isActive ? "Activo" : "No activo"}</h1>
      <p>{JSON.stringify(address)}</p>
    </>
  );
};
