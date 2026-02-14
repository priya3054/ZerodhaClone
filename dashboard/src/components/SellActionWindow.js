import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "./GeneralContext";
import SocketContext from "../context/SocketContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow } = useContext(GeneralContext);
  const socket = useContext(SocketContext);

  const handleSellClick = () => {
    socket.emit("place-order", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "SELL",
    });
  };

  useEffect(() => {
    if (!socket) return;

    const handleOrderConfirmed = (data) => {
      if (data.status === "success") {
        closeSellWindow();
      }
    };

    socket.on("order-confirmed", handleOrderConfirmed);

    return () => socket.off("order-confirmed", handleOrderConfirmed);
  }, [socket, closeSellWindow]);

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;