import css from './productcard.module.css';

const ProductCard = (props) => {
    const { product } = props;
    const { name, price, image } = product;
  return (
    <div className={css.productCard}>

        <div className={css.productImage}>
            <img src={image} alt={name} loading='lazy' />
        </div>
        <div className={css.productInfo}>
            <h3 className={css.productName}>{name}</h3>
            <p className={css.productPrice}>${price.toFixed(2)}</p>
        </div>
      
    </div>
  )
}

export default ProductCard
