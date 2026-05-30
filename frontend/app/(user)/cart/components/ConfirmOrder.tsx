"use client";

import { useState } from "react";

interface OrderItem {
  id: number;
  name: string;
  variant?: string;
  quantity: number;
  price: number;
  image: string;
}

interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const ORDER_ITEMS: OrderItem[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    variant: "Midnight Black",
    quantity: 1,
    price: 129.0,
    image: "🎧",
  },
  {
    id: 2,
    name: "USB-C Fast Charger",
    variant: "65W",
    quantity: 2,
    price: 19.0,
    image: "🔌",
  },
  {
    id: 3,
    name: "Phone Case",
    variant: "Midnight / Matte",
    quantity: 1,
    price: 24.99,
    image: "📱",
  },
];

const SHIPPING_ADDRESS: Address = {
  name: "Sarah Johnson",
  street: "42 Maple Street, Apt 3B",
  city: "New York",
  state: "NY",
  zip: "10012",
  country: "United States",
};

const TAX_RATE = 0.08875;
const SHIPPING_THRESHOLD = 75;

function generateOrderId(): string {
  return "ORD-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

type ModalState = "idle" | "processing" | "success";

export default function CheckoutConfirmation({isVisible, setIsVisible}: {isVisible: boolean, setIsVisible: (value: boolean) => void}) {
  const [modalState, setModalState] = useState<ModalState>("idle");
  const [orderId, setOrderId] = useState("");

  const subtotal = ORDER_ITEMS.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : 9.99;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  const handleConfirm = async () => {
    setModalState("processing");
    await new Promise((r) => setTimeout(r, 2000));
    setOrderId(generateOrderId());
    setModalState("success");
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <div className=" w-screen h-screen flex items-center justify-center p-4 font-sans">
      {/* Backdrop */}
      {isVisible && <div className=" fixed inset-0 bg-black/60 backdrop-blur-sm w-screen h-screen left-0 top-0" />}

      {/* Modal */}
      <div
        className={`relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden
          transition-all duration-300 ease-out
          ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}`}
      >
        {modalState === "success" ? (
          <SuccessState orderId={orderId} />
        ) : (
          <>
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-zinc-100 dark:border-zinc-800  flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg">
                🛍️
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-50 leading-tight">
                  Confirm your order
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Review details before placing
                </p>
              </div>
              <button
                onClick={handleCancel}
                className="ml-auto w-8 h-8 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-600 transition-colors"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 py-4 space-y-5 max-h-[50vh] overflow-y-auto scrollbar-none lg:flex  gap-5 lg:w-[1200px] w-full">
              <div className="lg:w-[50%] px-3 space-y-6 lg:border-r border-zinc-100 dark:border-zinc-800">
                {/* Delivery Address */}
                <section>
                  <SectionLabel>Delivery address</SectionLabel>
                  <div className="flex items-start gap-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-xl px-4 py-3 mt-2">
                    <span className="text-zinc-400 mt-0.5 shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinejoin="round"
                        />
                        <circle cx="8" cy="6" r="1.5" fill="currentColor" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        {SHIPPING_ADDRESS.name}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-0.5">
                        {SHIPPING_ADDRESS.street}
                        <br />
                        {SHIPPING_ADDRESS.city}, {SHIPPING_ADDRESS.state}{" "}
                        {SHIPPING_ADDRESS.zip}
                        <br />
                        {SHIPPING_ADDRESS.country}
                      </p>
                    </div>
                    <button className="ml-auto text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 underline underline-offset-2 transition-colors shrink-0">
                      Edit
                    </button>
                  </div>
                </section>

                {/* Price Summary */}
                <section>
                  <SectionLabel>Price summary</SectionLabel>
                  <div className="mt-2 bg-zinc-50 dark:bg-zinc-800/60 rounded-xl px-4 py-3 space-y-2">
                    <SummaryRow
                      label="Subtotal"
                      value={`$${subtotal.toFixed(2)}`}
                    />
                    <SummaryRow
                      label="Shipping"
                      value={
                        shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
                      }
                      valueClass={
                        shipping === 0
                          ? "text-emerald-600 dark:text-emerald-400 font-medium"
                          : ""
                      }
                    />
                    <SummaryRow
                      label={`Tax (${(TAX_RATE * 100).toFixed(3)}%)`}
                      value={`$${tax.toFixed(2)}`}
                    />
                    <div className="border-t border-zinc-200 dark:border-zinc-700 pt-2 mt-1 flex justify-between items-center">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Total
                      </span>
                      <span className="text-base font-bold text-zinc-900 dark:text-zinc-50">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </section>

                {/* Estimated Delivery */}
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <rect
                      x="1"
                      y="6"
                      width="10"
                      height="8"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    />
                    <path
                      d="M11 8h2l2 3v3h-4V8z"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinejoin="round"
                    />
                    <circle cx="4" cy="14" r="1.25" fill="currentColor" />
                    <circle cx="12" cy="14" r="1.25" fill="currentColor" />
                    <path
                      d="M4 6V3a3 3 0 016 0v3"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>
                    Estimated delivery:{" "}
                    <strong className="font-semibold">Jun 3 – Jun 5</strong>
                  </span>
                </div>

                {/* Security note */}
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1L2 3v4c0 3.31 2.24 5.95 5 6.5C9.76 12.95 12 10.31 12 7V3L7 1z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 7l1.5 1.5L9 5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Secured with 256-bit SSL encryption
                </div>
              </div>

              <div className=" lg:w-[50%]">
                {/* Order Items */}
                <section>
                  <SectionLabel>
                    Items ({ORDER_ITEMS.reduce((s, i) => s + i.quantity, 0)})
                  </SectionLabel>
                  <div className="mt-2 divide-y divide-zinc-100 dark:divide-zinc-800">
                    {ORDER_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 py-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg shrink-0">
                          {item.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 truncate">
                            {item.name}
                          </p>
                          {item.variant && (
                            <p className="text-xs text-zinc-400 mt-0.5">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm text-zinc-700 dark:text-zinc-300">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            qty {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
              <button
                onClick={handleConfirm}
                disabled={modalState === "processing"}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold
                  transition-all duration-200 active:scale-[0.98]
                  ${
                    modalState === "processing"
                      ? "bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 cursor-not-allowed"
                      : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-100"
                  }`}
              >
                {modalState === "processing" ? (
                  <>
                    <Spinner />
                    Processing…
                  </>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="2"
                        y="6"
                        width="10"
                        height="7"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                      />
                      <path
                        d="M4.5 6V4.5a2.5 2.5 0 015 0V6"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                      />
                    </svg>
                    Place order · ${total.toFixed(2)}
                  </>
                )}
              </button>

              <button
                onClick={handleCancel}
                disabled={modalState === "processing"}
                className="w-full py-3 px-6 rounded-xl text-sm font-medium text-zinc-500 dark:text-zinc-400
                  border border-zinc-200 dark:border-zinc-700
                  hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-700 dark:hover:text-zinc-200
                  transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Cancel &amp; go back
              </button>

              <p className="text-center text-xs text-zinc-400 pt-1">
                By placing your order you agree to our{" "}
                <span className="underline underline-offset-2 cursor-pointer hover:text-zinc-600 transition-colors">
                  Terms
                </span>{" "}
                &amp;{" "}
                <span className="underline underline-offset-2 cursor-pointer hover:text-zinc-600 transition-colors">
                  Privacy Policy
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SuccessState({ orderId }: { orderId: string }) {
  return (
    <div className="flex flex-col items-center text-center px-8 py-12 gap-4 w-2xl">
      <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="text-emerald-500"
        >
          <path
            d="M6 14l5.5 5.5L22 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          Order placed!
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
          You&apos;ll get a confirmation email shortly.
          <br />
          Track your order anytime.
        </p>
      </div>
      <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl px-5 py-3 text-sm mt-1 w-full">
        <p className="text-zinc-400 text-xs mb-1">Order ID</p>
        <p className="font-mono font-semibold text-zinc-800 dark:text-zinc-100 tracking-wider">
          {orderId}
        </p>
      </div>
      <div className="flex gap-3 w-full mt-2">
        <button className="flex-1 py-3 rounded-xl text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
          Track order
        </button>
        <button className="flex-1 py-3 rounded-xl text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors">
          Continue shopping
        </button>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
      {children}
    </p>
  );
}

function SummaryRow({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-zinc-500 dark:text-zinc-400">{label}</span>
      <span
        className={`text-xs text-zinc-700 dark:text-zinc-300 ${valueClass}`}
      >
        {value}
      </span>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
