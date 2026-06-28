import css from './productdetail.module.css';
import { useLocation } from 'react-router-dom';
import { products, assets } from '../../assets/images/frontend_assets/assets';
import { useState } from 'react';
import Section from '../section/Section';

const ProductDetail = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  const location = useLocation();
  const productId = location.pathname.replace('/collection/product/', '') || '';
  const product = products.find(p => p._id === productId);
  const { bestseller, category, description, image, name, price, sizes, subCategory } = product || {};
  console.log(category, subCategory);


  return (
    <div className='container'>
      <div className={css.productDetailContainer}>
        <div className={css.productDetailMain}>
          <div className={css.productDeatilSection}>
            <div className={css.productImage}>
              <div className={css.productImageOption}>
                {image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`product_Image_${index}`}
                    loading="lazy"
                    onClick={() => setImageIndex(index)}
                    className={index === imageIndex ? css.activeImage : css.inactiveImage}
                  />
                ))}
              </div>
              <div className={css.productImageMain}>
                <img src={image[imageIndex]} alt='product_Image' loading="lazy" />
              </div>
            </div>
            <div className={css.productInfo}>
              <p className={css.productName}>{name}
                {bestseller && <span className={css.bestsellerBadge}>Bestseller</span>}
              </p>
              <div className={css.starCount}>
                <div className={css.starBox}>
                  {
                    Array.from({ length: 5 }, (_, index) => {
                      if (index < 4) {
                        return <span key={index}>
                          <img src={assets.star_icon} alt='star' loading="lazy" />
                        </span>
                      }
                      return (
                        <span key={index}>
                          <img src={assets.star_dull_icon} alt='star' loading="lazy" />
                        </span>
                      )
                    })
                  }
                </div>
                <p className={css.reviewCount}>(122)</p>
              </div>
              <p className={css.price}>${price.toFixed(2)}</p>
              <p className={css.description}>{description}</p>
              <div className={css.sizes}>
                <p className={css.sizeLabel}>Select Size</p>
                <div className={css.sizeOptions}>
                  {sizes.map((size, index) => (
                    <span key={index} className={selectedSize === size ? css.activeSize : css.sizeOption} onClick={() => setSelectedSize(size)}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <button className={css.addToCartButton}>Add to Cart</button>
              <hr />
              <div className={css.productWarrentyBox}>
                <ul>
                  <li className={css.productWarrentyItem}>100% Original product.</li>
                  <li className={css.productWarrentyItem}>Cash on delivery is available on this product.</li>
                  <li className={css.productWarrentyItem}>Easy return and exchange policy within 7 days.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.productDescription}>
            <div className={css.descFirst}>
              <span>Description</span>
              <span>Reviews(122)</span>
            </div>
            <div className={css.descSecond}>
              <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
              <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
          </div>
          <div className={css.relatedProducts}>
            <Section
              sectionTitle="RELATED PRODUCTS"
              products={products.filter(product => product.category === category && product.subCategory === subCategory).slice(2, 6)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
