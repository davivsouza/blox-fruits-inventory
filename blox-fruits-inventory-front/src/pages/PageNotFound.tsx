import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="text-center flex flex-col gap-2">
      <h1 className="sm:text-5xl font-bold text-3xl ">
        404 Page Not Found!
      </h1>
      <Link to="/" className="underline text-blue-800">
        Back to Home
      </Link>
    </div>
  );
}
