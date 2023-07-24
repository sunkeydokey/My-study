type ProductListProps = {
  products: Array<{ id: number; img: string; name: string; category: string }>;
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id} className="m-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={product.img} alt={product.name} className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
