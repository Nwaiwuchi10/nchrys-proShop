import React, { useState } from "react";
import Paypal from "./Paypal";
const PaypalS = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <div>
      {checkout ? (
        <Paypal />
      ) : (
        <button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default PaypalS;
