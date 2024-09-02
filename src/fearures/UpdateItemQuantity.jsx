import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cart/cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const handleIncreaseItem = (e) => {
    e.preventDefault();
    dispatch(increaseItemQuantity(pizzaId));
  };

  const handleDecreaseItem = (e) => {
    e.preventDefault();
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="mx-3 flex items-center gap-2 sm:gap-2">
      <Button onClick={handleDecreaseItem} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={handleIncreaseItem} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
