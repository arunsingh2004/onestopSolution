import React from "react";
import mongoose from "mongoose";
import Order from "@/models/order";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Orders = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (!localStorage.getItem("token")) {
        router.push("/");
      }
    };
  }, []);
  return (
    <>
      <div>
        <div className="conatiner mx-auto"></div>
        <div class="flex flex-col">
          <h1 className="text-xl font-bold p-8">My Orders</h1>
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="m-4 overflow-hidden">
                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                          <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" class="px-6 py-4">
                                #
                              </th>
                              <th scope="col" class="px-6 py-4">
                                First
                              </th>
                              <th scope="col" class="px-6 py-4">
                                Last
                              </th>
                              <th scope="col" class="px-6 py-4">
                                Handle
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200">
                              <td class="whitespace-nowrap px-6 py-4 font-medium">
                                1
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">Mark</td>
                              <td class="whitespace-nowrap px-6 py-4">Otto</td>
                              <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                            </tr>
                            <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200">
                              <td class="whitespace-nowrap px-6 py-4 font-medium">
                                2
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                              <td class="whitespace-nowrap px-6 py-4">
                                Thornton
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">@fat</td>
                            </tr>
                            <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200">
                              <td class="whitespace-nowrap px-6 py-4 font-medium">
                                3
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">Larry</td>
                              <td class="whitespace-nowrap px-6 py-4">Wild</td>
                              <td class="whitespace-nowrap px-6 py-4">
                                @twitter
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let orders = await Order.find({});
  return {
    props: {
      orders: orders,
    },
  };
}
export default Orders;
