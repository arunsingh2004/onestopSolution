// "use client";
import React from "react";
// import Link from "next/link";
// import axios from "axios";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
// import Head from "next/head";
// import Script from "next/head";
// import Stripe from "stripe";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
const Checkout = async ({
  cart,
  addToCart,
  removeToCart,
  clearCart,
  subTotal,
  oid,

  email = "email",
}) => {
  const handleCheckoutClick = () => {
    const checkoutUrl = "https://buy.stripe.com/aEU6r14nO5z00soaEE";
    window.location.href = checkoutUrl;
  };
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleCheckoutClick = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch("https://buy.stripe.com/aEU6r14nO5z00soaEE");
  //     const result = await response.json();
  //     setData(result);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://buy.stripe.com/aEU6r14nO5z00soaEE"
  //       );
  //       const result = await response.json();
  //       setData(result);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   };

  //   fetchData();
  // }, []); // Run once on component mount

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  // let stripePromise = null;
  // let getstripe = async () => {
  //   if (!stripePromise) {
  //     stripePromise = loadStripe(
  //       process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  //     );
  //   }
  //   return stripePromise;
  // };
  // const stripe = await getstripe();
  // await stripe.redirectToCheckout({
  //   mode: "payment",
  //   lineItems: "subTotal",
  //   success_url: `${window.location.origin}?session_id={CHECKOUT_}`,
  //   cancel_url: window.location.origin,
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const data ={ cart, subTotal};
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:3000/api/payment",
  //       {
  //         cart: cart,
  //         priceId: subTotal,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     window.location.assign(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error.response.data);
  //   }
  // };
  // const handleCheckout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const stripe = await stripePromise;

  //     const checkoutSession = await axios.post(
  //       "http://localhost:3000/api/payment",
  //       {
  //         cart,
  //       }
  //     );

  //     const result = await stripe.redirectToCheckout({
  //       sessionId: checkoutSession.data.id,
  //     });

  //     if (result.error) {
  //       alert(result.error.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // const initiatePayment = async () => {
  //   let oid = Math.floor(Math.random() * Date.now());
  //   const data = { cart, subTotal };
  //   //get the transaction token
  //   let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   let tnxToken = await a.json();
  //   console.log(tnxToken);
  //   var config = {
  //     root: "",
  //     flow: "DEFAULT",
  //     data: {
  //       orderId: oid /* update order id */,
  //       token: tnxToken /* update token value */,
  //       tokenType: "TXN_TOKEN",
  //       amount: subTotal /* update amount */,
  //     },
  //     handler: {
  //       notifyMerchant: function (eventName, data) {
  //         console.log("notifyMerchant handler function called");
  //         console.log("eventName => ", eventName);
  //         console.log("data => ", data);
  //       },
  //     },
  //   };
  //   // initialze configuration using init
  //   window.Paytm.CheckoutJS.init(config)
  //     .then(function onSuccess() {
  //       // after successfully updating configuration, invoke JS Checkout
  //       window.Paytm.CheckoutJS.invoke();
  //     })
  //     .catch(function onError(error) {
  //       console.log("error => ", error);
  //     });
  // };

  return (
    <>
      <div className="container m-auto sm:m-auto mx-8">
        {/* <Head>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
          />
        </Head>
        <Script
          type="application/javascript"
          crossorigin="anonymous"
          src={`${process.env.PAYTM_HOST}/merchantpgpui/checkoutjs/merchant/${process.env.PAYTM_MID}.js`}
          onLoad="onScriptLoad()"
        /> */}
        <h1 className="font-bold text-center text-3xl my-8">Checkout</h1>
        <h2 className="font-bold text-xl">1.Delivery Details</h2>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="px-2 w-full">
          <div className="mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="2"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>

        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="city"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="state"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="pincode"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <h2 className="font-bold text-xl">2.Reviw Your Items</h2>
        <div className=" bg-blue-100 sideCart  py-10 px-8 ">
          <h2 className="font-bold text-xl text-center">Your Cart</h2>
          <span className="absolute top-5 right-2 cursor-pointer text-2xl text-blue-500">
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal  font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-4  font-semibold">Your Cart is Empty</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">
                      {cart[k].name}({cart[k].size}/{cart[k].variant})
                    </div>
                    <div className="w-1/3 flex items-center justify-center font-semibold ">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-blue-500"
                      />
                      <span className="mx-2"> {cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-blue-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <span className="font-bold">SubTotal:₹{subTotal}</span>

          {/* <div className="flex">
            <Link href={"/checkout"}>
              <button className="flex mr-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-300 rounded text-sm">
                <BsFillBagCheckFill className="m-2" /> CheckOut
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex mr-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-300 rounded text-sm"
            >
              Clear Cart
            </button>
          </div> */}
        </div>
        <div className="mx-8">
          {data.someProperty}
          <button
            // onClick={initiatePayment}
            // onClick={handleSubmit}
            //
            onClick={handleCheckoutClick}
            disabled={isLoading}
            className="flex mt-2 text-white bg-blue-500 border-0 py-2 px-12 focus:outline-none hover:bg-blue-300 rounded text-sm"
          >
            <BsFillBagCheckFill className="m-2" />
            Pay ₹{subTotal}
          </button>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && <div>{data.someProperty}</div>}
        </div>
      </div>
    </>
  );
};

export default Checkout;
