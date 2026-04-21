

import ProductCard from '../productcard/ProductCard';
import css from './section.module.css';

const Section = (props) => {

    const { sectionTitle, sectionDesc, products } = props;

    const firstTitleWord = sectionTitle.split(' ')[0];
    const secondTitleWord = sectionTitle.split(' ')[1];
    return (
        <div className={css.sectionContainer}>
            <div className={css.sectionMain}>
                <h2 className={css.sectionTitle}>
                    <span className={css.sectionTitleFirstWord}>{firstTitleWord}</span>
                    <span className={css.sectionTitleSecondWord}>{secondTitleWord}</span>
                    <p></p>
                </h2>
                <p className={css.sectionDesc}>{sectionDesc}</p>

                <div className="my-4">
                    <div className="row">
                        {products.map((product, i) => (
                            <div className="col-6 col-md-3 my-1" key={`product-${product.id}-${i}`}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
