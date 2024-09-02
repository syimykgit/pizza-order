import { Link, useFetcher, useNavigation } from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import UpdateOrder from "../../ui/UpdateOrder";
import EmptyCart from "../cart/EmptyCart";
import EmptyOrder from "./EmptyOrder";
import Loader from "../../ui/Loader";

function OrderHistory() {
  const [value, setValue] = useState([]);
  const orderId = useSelector((state) => state.order.orderId);
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  useEffect(() => {
    (async () => {
      const data = orderId?.map((id) => getOrder(id));
      const result = await Promise.all(data);
      setValue(result);
    })();
  }, [orderId]);

  if (fetcher.state === "loading") return <Loader />;

  if (!value.length) return <EmptyOrder />;

  return (
    <>
      {value.map((items, id) => (
        <div className="bg space-y-8 px-6 py-6" key={id}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">
              Order ID:<span className="text-green-500">{items.id}</span>
            </h2>
          </div>

          <ul className="devide-y divide-stone-200 border-b border-t">
            {items.cart.map((item) => (
              <OrderItem
                isLoadingIngredients={fetcher?.state === "loading"}
                ingredients={
                  fetcher?.data?.find((el) => el.id === item.pizzaId)
                    .ingredients ?? []
                }
                item={item}
                key={item.pizzaId}
              />
            ))}
          </ul>

          <div className="space-y-2 bg-stone-200 px-6 py-5">
            <p className="text-sm font-medium text-stone-600">
              Price pizza: {formatCurrency(items.orderPrice)}
            </p>
            {items.priority && (
              <p className="text-sm font-medium text-stone-600">
                Price priority: {formatCurrency(items.priorityPrice)}
              </p>
            )}
            <p className="flex flex-wrap items-center justify-between gap-5 font-bold">
              Total: {formatCurrency(items.orderPrice + items.priorityPrice)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default OrderHistory;
