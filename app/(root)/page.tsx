import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
// import sampleData from "@/db/sample-data";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Home",
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  // await delay(1000);
  // console.log(sampleData);
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Latest Arrivals" />
    </>
  );
};

export default HomePage;
