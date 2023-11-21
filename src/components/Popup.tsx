import Close from "../svg/Close";

const Popup = (props: {
  setShowPopup: (bool: boolean) => void;
  setSigned: (bool: boolean) => void;
}) => {
  return (
    <div className="bg-white absolute right-0 p-6 flex flex-col items-center">
      <Close onClick={() => props.setShowPopup(false)} />
      <button
        onClick={() => {
          props.setSigned(false);
          // Retrieve stored data from local storage
          const storedSignupDataString = localStorage.getItem("signupFormData");

          if (storedSignupDataString) {
            // Parse the stored data
            const storedSignupData = JSON.parse(storedSignupDataString);

            // Update the specific property (e.g., update the signed property)
            storedSignupData.signed = false; // Set the new value

            // Save the modified data back to local storage
            localStorage.setItem(
              "signupFormData",
              JSON.stringify(storedSignupData)
            );
          } else {
            // Handle the case where no signup data is found in local storage
            console.log("something went wrong");
          }
          props.setShowPopup(false);
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Popup;
