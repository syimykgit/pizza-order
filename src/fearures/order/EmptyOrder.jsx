import LinkButton from "../../ui/LinkButton";

function EmptyOrder() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 text-center font-semibold">No orders</p>
    </div>
  );
}

export default EmptyOrder;
