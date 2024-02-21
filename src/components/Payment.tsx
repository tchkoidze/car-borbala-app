import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "AdelPwHWz-JSLxN-mEsK0u-Ip7gEVRzFcl4WQyT4w64RglZU2qLy-np580Cv8wRtM7AVGBAGdTulcy_B",
  currency: "USD",
  intent: "capture",
};

const Pay = () => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      {/*<Checkout />*/}
    </PayPalScriptProvider>
  );
};
