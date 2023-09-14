"use client";
import { Product } from "@/types";
import { Expand, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Currency from "./currency";
import IconButton from "./icon-button";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-3">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          fill
          alt="image"
          className="aspect-square rounded-md object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {
                handleClick();
              }}
              icon={<Expand size={20} className={"text-gray-600"} />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingBag size={20} className={"text-gray-600"} />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
