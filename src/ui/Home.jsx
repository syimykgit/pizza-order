import { useSelector } from "react-redux";
import CreateUser from "../fearures/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <>
      <div className="my-10 flex h-96 w-full flex-col items-center justify-center rounded-xl bg-[url('https://www.hormel.com/brands/hormel-pepperoni/wp-content/uploads/sites/3/Recipes_2400_Pepperoni_Cup_Crips_Sweet_Spicy_Basil_Pep_Hot_Honey.jpg?1723227466')] bg-cover bg-center px-4 text-center shadow-md sm:my-16">
        {userName === "" ? (
          <CreateUser />
        ) : (
          <Button type="primary" to="/menu">
            <span className="text-slate-700">
              Continue ordering, {userName}
            </span>
          </Button>
        )}
      </div>
      <h1 className="mb-10 flex justify-center bg-yellow-400 p-10 text-center text-xl font-semibold text-yellow-50 sm:mb-16 md:text-3xl">
        <p>Fresh is the BEST</p>
      </h1>
      <img
        src="https://tb-static.uber.com/prod/image-proc/processed_images/f4a68889d6c02c9b4a227e1afef54e52/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg"
        alt="pizza"
        className="h-auto w-full rounded-lg object-cover shadow-md"
      />
    </>
  );
}

export default Home;
