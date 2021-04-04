import React from "react";
import { Link } from "gatsby";

const NotFound = () => (
  <div>
    <h1>Ops! 404 Page Not Found</h1>
    <p>
      Something Went Wrong Please Go to <Link to="/">Home</Link>
    </p>
  </div>
);

export default NotFound;
