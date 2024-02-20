import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "AXq00rESyVuTpqSbmgSG6X8ekkIsBGsblsNUbUguz4xyXfURh8z0O0LPv22SZ6T-Yh6YrMIkJP-njnxG",
  currency: "USD",
  intent: "capture",
};

const Pay = () => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Checkout />
    </PayPalScriptProvider>
  );
};
