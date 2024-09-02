import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Username() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="text-sm font-semibold md:block">
      {
        <Link className="flex text-sm font-medium" to="/orderhistory">
          <img
            className="h-5"
            src="/img/logo/shopping-cart-check.png"
            alt="order"
          />
          {userName || null}
        </Link>
      }
    </div>
  );
}

export default Username;
