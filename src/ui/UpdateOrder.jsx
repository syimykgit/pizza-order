import { redirect, useFetcher, useParams } from "react-router-dom";
import Button from "./button";
import { useEffect, useState } from "react";
import { updateOrder } from "../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <Button type="small">Make Priority</Button>
    </fetcher.Form>
  );
}

export const action = async function ({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};
export default UpdateOrder;
