import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../fearures/cart/CartOverview";
import { useNavigation } from "react-router-dom/dist";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
