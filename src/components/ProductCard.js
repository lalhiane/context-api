function ProductCard(props) {

    return <div className="Crad">{props.children}</div>

}

ProductCard.CardHead = function (props) {

    const { image, title } = props.product;

    return (

        <div className="card-head">

            <img src={image} alt={title} />

        </div>

    );

}

ProductCard.CardBody = function (props) {

    const { title, price, description } = props.product;

    return (

        <div className="card-body">

            <h3 className="product-title">{title}</h3>

            <h4 className="product-price">{price}</h4>

            <p className="product-desc">{description}</p>

        </div>

    );

}

ProductCard.CardFoot = function () {

    return (

        <div className="card-foot">

            <button className="details-btn">Details</button>

        </div>

    );
    
}

export default ProductCard;