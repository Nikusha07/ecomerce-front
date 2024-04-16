import { Header } from "@/components/Heder"; 
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product"; 
import { ProductsMap } from "@/components/ProductsMap";

export default function Home({ product }) {
  return (
    <div>
      <Header />
      <ProductsMap product={product}/>
    </div>
  );
}

export async function getServerSideProps() { 
  const featuredProductId = "661863b08d96324275439230";
  await mongooseConnect();

  const product = await Product.findById(featuredProductId); 
  const newProducts = await Product.find({} , null , {sort : {}})

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  };
}
