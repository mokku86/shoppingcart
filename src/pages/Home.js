import { Card } from "../components";
import { useFetch, useTitle } from "../hooks";

export const Home = () => {
  useTitle('Home');
  const products = [
        {
            "id" : 10001,
            "name" : "Sonic Gear - bla-007 wireless headphone",
            "price" : 149,
            "img" : "images/item-01.jpg"
        },
        {
            "id" : 10002,
            "name" : "Beats - bs-1000 wireless headphone",
            "price" : 139,
            "img" : "images/item-02.jpg"
        },
        {
            "id" : 10003,
            "name" : "Sony - HD-2839 wired headphone",
            "price" : 129,
            "img" : "images/item-03.jpg"
        },
        {
            "id" : 10004,
            "name" : "Abdie - ww-007 wired headphone",
            "price" : 119,
            "img" : "images/item-04.jpg"
        },
        {
            "id" : 10005,
            "name" : "Marshal - mm-007 wireless headphone",
            "price" : 159,
            "img" : "images/item-05.jpg"
        },
        {
            "id" : 10006,
            "name" : "Sony - KK-007 wireless headphone",
            "price" : 169,
            "img" : "images/item-06.jpg"
        },
        {
            "id" : 10007,
            "name" : "JBL - P47 wireless headphone",
            "price" : 179,
            "img" : "images/item-07.jpg"
        },
        {
            "id" : 10008,
            "name" : "Apple - wireless headphone",
            "price" : 189,
            "img" : "images/item-08.jpg"
        },
        {
            "id" : 10009,
            "name" : "HiFiMan - HH-001 wired headphone",
            "price" : 199,
            "img" : "images/item-09.jpg"
        }
    ]

  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto p-4 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(220px,_340px))] xl:grid-cols-[repeat(auto-fill,_minmax(220px,_400px))] py-4 justify-center">
            { products.map(product => (
              <Card key={product.id} img={product.img} name={product.name} price={product.price} />
            )) }
        </div>
      </section>
    </main>
  )
}
