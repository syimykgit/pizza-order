import { Link, useNavigate } from "react-router-dom";

function LinkButton({ to, children }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  return to === "-1" ? (
    <button className={className} onClick={() => navigate(-1)}>
      {children}
    </button>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
