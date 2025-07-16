import { CartItem } from "../components";
import { useFetch, useTitle } from "../hooks";

export const Cart = () => {
  useTitle('Your Cart');
  const { data:carts } = useFetch('carts');

  return (
    <main>
      <section>
        <h1 className="text-2xl text-center font-bold my-4">Cart items: {carts.length}</h1>
        <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4">
          {carts.map(cart => (
            <CartItem key={cart.id} name={cart.name} img={cart.img} price={cart.price} />
          ))}
        </div>
      </section>
    </main>
  )
}
