import { Product } from "@/global/types/type";
import ProductThumb from "../ui/ProductThumb";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function TopProducts({ topProducts }: { topProducts?: Product[] }) {
  const topProduct = [
    {
      name: "Apple iPhone 13",
      sku: "Item: #FXZ-4567",
      price: "$999.00",
      color: "bg-[#023337]",
    },
    {
      name: "Nike Air Jordan",
      sku: "Item: #FXZ-4567",
      price: "$72.40",
      color: "bg-[#23272E]",
    },
    {
      name: "T-shirt",
      sku: "Item: #FXZ-4567",
      price: "$35.40",
      color: "bg-black",
    },
    {
      name: "Assorted Cross Bag",
      sku: "Item: #FXZ-4567",
      price: "$80.00",
      color: "bg-[#4EA674]",
    },
  ];

  return (
    <div className=" h-full">
      {" "}
      {/* Top Products */}
      <section className="h-full rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#23272E]">
            Top Products
          </h2>
          <Link
            href={""}
            className="text-sm font-medium text-[#6467F2] hover:underline"
          >
            All product
          </Link>
        </div>

        <div className="mb-5 flex items-center gap-2 rounded-xl bg-[#F9FAFB] px-3 py-2.5 ring-1 ring-[#E5E7EB]">
          <Search className="h-4 w-4 text-[#8B909A]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-[#23272E] placeholder:text-[#8B909A] focus:outline-none"
          />
        </div>

        <ul>
          {topProducts
            ? topProducts?.map(
                (p, i) =>
                  i < 5 && (
                    <li
                      key={p.name}
                      className={`flex items-center gap-5 max-md:gap-3 py-3 ${
                        i !== 0 ? "border-t border-[#F0F0F2]" : ""
                      }`}
                    >
                      <Image
                        className=" rounded-md"
                        src={p.poster}
                        alt="Product Image"
                        width={50}
                        height={50}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#23272E]">
                          {p.name}
                        </p>
                        <p className="text-xs text-[#8B909A]">
                          #{p.productCategory[0]}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#23272E]">
                        ${p.price}
                      </p>
                    </li>
                  ),
              )
            : topProduct.map((p, i) => (
                <li
                  key={p.name}
                  className={`flex items-center gap-3 py-3 ${
                    i !== 0 ? "border-t border-[#F0F0F2]" : ""
                  }`}
                >
                  <ProductThumb colorClass={p.color} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#23272E]">
                      {p.name}
                    </p>
                    <p className="text-xs text-[#8B909A]">{p.sku}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#23272E]">
                    {p.price}
                  </p>
                </li>
              ))}
        </ul>
      </section>
    </div>
  );
}

export default TopProducts;
