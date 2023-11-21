import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import loginSchema from "../schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{
    email: string;
    password: string;
  }> = async (data) => {
    console.log(data);
    console.log(45);
    // Retrieve stored signup data from local storage
    const storedSignupDataString = localStorage.getItem("signupFormData");
    if (storedSignupDataString) {
      const storedSignupData = JSON.parse(storedSignupDataString);

      // Compare login data with stored signup data
      if (
        data.email === storedSignupData.email &&
        data.password === storedSignupData.password
      ) {
        console.log("Login successful!", storedSignupData.signed);
        //setSigned(true);
        //*setSigned(storedSignupData.signed);

        // Retrieve stored data from local storage
        //const storedSignupDataString = localStorage.getItem("signupFormData");

        /*if (storedSignupDataString) {
          // Parse the stored data
          const storedSignupData = JSON.parse(storedSignupDataString);

          // Add a new property to the object
          storedSignupData.signed = true; // Set the value for the new property

          // Save the modified data back to local storage
          localStorage.setItem(
            "signupFormData",
            JSON.stringify(storedSignupData)
          );
        } else {
          // Handle the case where no signup data is found in local storage
        }*/

        navigate("/home"); // Move to the "/home" route on successful login
      } else {
        console.log("Invalid login credentials");
        // Handle invalid login credentials (e.g., show an error message)
      }
    } else {
      console.log("No signup data found");
      // Handle the case where no signup data is found in local storage
    }
    //navigate("/home");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            {...register("email")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="loginPassword"
          >
            Password
          </label>
          <input
            {...register("password")}
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="loginPassword"
            type="password"
            placeholder="******************"
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
          Not a member?{" "}
          <Link
            to={"/signup"}
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

//Login: React.FC<{ setSigned: (signed: boolean) => void }>
