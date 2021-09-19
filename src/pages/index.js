import Head from "next/head";
import Header from "../components/Header";

export default function Home({ products }) {
  console.log("products", products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <Head>
        <title>Google-docs-2</title>
      </Head>
      <Header />
    </div>
  );
}

// Server rendered side
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       products,
//     },
//   };
// }
