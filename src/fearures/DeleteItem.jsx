import { useDispatch } from "react-redux";
import Button from "../ui/button";
import { deleteItem } from "./cart/cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDeleteCartItem = (e) => {
    e.preventDefault();
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button onClick={handleDeleteCartItem} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
