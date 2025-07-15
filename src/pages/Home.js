import { Card } from "../components";
import { useFetch, useTitle } from "../hooks";

export const Home = () => {
  useTitle('Your Cart');
  const { data:products } = useFetch('products');

  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto grid gap-4 grid-cols-[repeat(auto-fill,_minmax(240px,_414px))] py-4 justify-center">
            { products.map(product => (
              <Card key={product.id} img={product.img} name={product.name} price={product.price} />
            )) }
        </div>
      </section>
    </main>
  )
}
