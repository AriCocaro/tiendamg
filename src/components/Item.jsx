export default function Item(props){
    const {title, img, price, description} = props
    
    return (
        <div>
            <h1>{title}</h1>
            <img src={img} alt="" />
            <p> {price}</p>
            <p>{description}</p>
        </div>
    )
}


