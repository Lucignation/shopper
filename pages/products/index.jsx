import React from 'react';
import axios from 'axios';
import useSWR from 'swr';

//importing from folders
import Product from '../../components/Product';

//importing the styles
import ProductStyles from '../../styles/Products.module.css';

const Products = () => {
  const address = 'https://api.escuelajs.co/api/v1/products';

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  console.log('data from products = ', data);
  return (
    <div className={ProductStyles.product_container}>
      {data?.map((p, indx) => (
        <div key={p.id}>
          <Product product={p} />
        </div>
      ))}
    </div>
  );
};

// export const getStaticProps = async () => {
//   const all_products = await axios.get(
//     'https://api.escuelajs.co/api/v1/products'
//   );

//   return {
//     props: {
//       all_products,
//     },
//   };
// };

export default Products;
