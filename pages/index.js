import { Header } from "@/components/Heder"; 
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product"; 
import { NewProducts } from "@/components/newProducts";
import { Footer } from "@/components/Footer";

export default function Home({ newProducts }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
      <Header />
      <NewProducts ProductsList={newProducts} />
      </div>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  };
}
