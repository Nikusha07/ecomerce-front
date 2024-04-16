import { DolarIcon } from "@/public/icons/dolarIcon";

export const NewProducts = ({ ProductsList }) => {
  return (
    <>
      <section className="flex flex-wrap mt-[20px] gap-3 justify-center">
        {ProductsList.map((product) => (
          <div key={product._id} className="w-[200px] p-[10px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-md">
            <div className="bg-[#d9ceff] w-[100%] h-[100%] flex flex-col justify-between p-[5px] rounded-md">
              <div>
                <h1 className="text-[14px] font-[600] text-[#6b04fd] roboto-bold">{product.title}</h1>
                <img src={product.images} alt={product.name} />
              </div>
              <div className="py-[3px] px-[3px]">
                <p>{product.description}</p>
                <p className="flex gap-1 font-[500]">
                  Price: {product.price}
                  <DolarIcon className="w-5" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
