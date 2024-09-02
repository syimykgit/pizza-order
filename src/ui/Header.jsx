import { Link } from "react-router-dom";
import SearchOrder from "../fearures/order/SearchOrder";
import Username from "../fearures/user/Username";
import OrderHistory from "../fearures/order/OrderHistory";
import Button from "./Button";

import { useSelector } from "react-redux";

function Header() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-500 p-2 px-4 uppercase sm:px-6">
      <Link to="/" className="text-sm font-medium tracking-widest">
        <img
          className="h-7 rounded-full bg-slate-700 p-1 sm:h-14 sm:p-2"
          src="/img/logo/logo.png"
        />
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
