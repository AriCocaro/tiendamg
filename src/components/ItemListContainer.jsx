import products from "../data/products"
import item from "./Item"

export default function ItemListContainer(props){
    const {items} = props
    return(
        <section>
            <h1>{items}</h1>

            {
                products.map( (item) => { <item 
                    title={item.title}
                    img={item.img}
                    price={item.price}/>
                })
            }

        </section>
    )
}