import { NavLink } from 'react-router-dom';
import css from './productcard.module.css';

const ProductCard = (props) => {
    const { product } = props;
    const { name, price, image, _id } = product;
    return (
        <a href={`/collection/product/${_id}`} className={css.productCardContainer}>
            <div className={css.productCard}>
                <div className={css.productImage}>
                    <img src={image[0]} alt={name} loading='lazy' />
                </div>
                <div className={css.productInfo}>
                    <h3 className={css.productName}>{name}</h3>
                    <p className={css.productPrice}>${price.toFixed(2)}</p>
                </div>
            </div>
        </a>
    )
}

export default ProductCard
