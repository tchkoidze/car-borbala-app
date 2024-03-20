import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

//const BASE_URL = import.meta.env.VITE_BACK_URL;

export default function Verify() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hash = params.get("hash");

  useEffect(() => {
    const verify = async () => {
      try {
        await axios.post(`http://localhost:5000/api/verify`, {
          hash,
        });
      } catch (error) {
        console.error("An error occurred during verification:", error);
        return error;
      }
    };
    verify();
  });
  return (
    <div>
      <p>Your eccount verified</p>

      <button>
        <Link to="/login">
          <p>Log In</p>
        </Link>
      </button>
    </div>
  );
}
