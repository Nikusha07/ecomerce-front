import { Header } from "@/components/Heder"; 
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product"; 
import { ProductsMap } from "@/components/ProductsMap";
import { NewProducts } from "@/components/newProducts";

export default function Home({ newProducts }) {
  return (
    <div>
      <Header />
      <ProductsMap />
      <NewProducts ProductsList={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "661863b08d96324275439230";
  await mongooseConnect();

  const product = await Product.findById(featuredProductId); 
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  };
}
