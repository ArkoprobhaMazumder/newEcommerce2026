import React, { useState, useEffect } from 'react';
import css from './collection.module.css';
import { products } from '../../assets/images/frontend_assets/assets';
import ProductCard from '../../Components/productcard/ProductCard';

const Collection = () => {

  const [productList, setProductList] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState('relevant');

  console.log(productList);

  const categories = ['men', 'women', 'kids'];
  const types = ['topwear', 'bottomwear', 'winterwear'];


  useEffect(() => {
    if (selectedTypes === 'lowToHigh') {
      const sortedProducts = [...productList].sort((a, b) => a.price - b.price);
      setProductList(sortedProducts);
    } else if (selectedTypes === 'highToLow') {
      const sortedProducts = [...productList].sort((a, b) => b.price - a.price);
      setProductList(sortedProducts);
    } else {
      setProductList(productList);
    }
  }, [selectedTypes]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setProductList(products);
    } else {
      const filteredProducts = products.filter(product =>
        selectedCategories.includes(product.category.toLowerCase())
      );
      setProductList(filteredProducts);
    }
  }, [selectedCategories]);


  useEffect(() => {
    if (selectedSubCategory.length === 0) {
      setProductList(products);
    } else {
      const filteredProducts = products.filter(product =>
        selectedSubCategory.includes(product.subCategory.toLowerCase())
      );
      setProductList(filteredProducts);
    }
  }, [selectedSubCategory]);

  return (
    <div className='container'>
      <div className={css.collectionContainer}>
        <div className={css.collectionMain}>
          <div className={css.collectionFilter}>
            <p>FILTERS</p>
            <div className={css.categoryFilter}>
              <div className={css.filterBox}>
                <p>CATEGORIES</p>
                <div className={css.filterList}>
                  {
                    categories.map((c, i) => {
                      return (
                        <div key={i} className={css.filterItem}>
                          <input type="checkbox" id={c} name={c} value={c} onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, c]);
                            } else {
                              setSelectedCategories(selectedCategories.filter((cat) => cat !== c));
                            }
                          }} />
                          <label htmlFor={c}>{c}</label>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className={css.typeFilter}>
              <div className={css.filterBox}>
                <p>TYPE</p>
                <div className={css.filterList}>
                  {
                    types.map((c, i) => {
                      return (
                        <div key={i} className={css.filterItem}>
                          <input type="checkbox" id={c} name={c} value={c} onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedSubCategory([...selectedSubCategory, c]);
                            } else {
                              setSelectedSubCategory(selectedSubCategory.filter((cat) => cat !== c));
                            }
                          }} />
                          <label htmlFor={c}>{c}</label>
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            </div>
          </div>
          <div className={css.collectionProducts}>
            <div className={css.collectiontitlesort}>
              <h4>ALL <span>COLLECTIONS <span></span></span></h4>
              <div className={css.sortBox}>
                <select name="sort" id="sort" onChange={(e) => setSelectedTypes(e.target.value)}>
                  <option value="relevant">Sort by: Relevant</option>
                  <option value="lowToHigh">Sort by: Low to High</option>
                  <option value="highToLow">Sort by: High to Low</option>
                </select>
              </div>
            </div>
            <div className={css.collectionProductList}>
              {
                productList.map((p, i) => (
                  <div key={i} className={css.collectionProductItem}>
                    <ProductCard product={p} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
