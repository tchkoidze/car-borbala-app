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
          props.setShowPopup(false);
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Popup;
