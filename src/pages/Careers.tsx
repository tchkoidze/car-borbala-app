import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="flex flex-col justify-center h-[100vh] mx-6">
      <h1>Became our team member, send your cv</h1>
      <Link to={"/"}>career@carborbala.com</Link>
    </div>
  );
};

export default Career;
