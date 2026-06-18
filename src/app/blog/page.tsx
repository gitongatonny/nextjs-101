import { Metadata } from "next";

// Static metadata
export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  // Artificial 2-second delay to simulate loading or async work
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("deliberate delay");
    }, 2000);
  });

  // Content
  return <h1>This is a Blog Page</h1>;
}
