import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from './home.duck';


const Home = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  },[])
  return (
    <div>
      Home Component
    </div>
  )
}

export default Home
