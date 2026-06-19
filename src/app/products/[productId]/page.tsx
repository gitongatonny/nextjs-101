import { Metadata } from "next";

//Dynamic Metadata
type Props = {
  params: Promise<{ productId: string }>;
};

//Dynamic metadata sample config
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone: ${id}`);
    }, 100);
  });
  return {
    title: `Product: ${title}`,
  };
};

//Dynamic routes
// If no error happens, render the product details and the random #
export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1> This is product: {productId} </h1>;
}
