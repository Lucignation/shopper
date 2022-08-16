import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Image from 'next/image';

//importing of styles
import ProductStyles from '../../styles/Product.module.css';

import Link from 'next/link';

const Product = () => {
  const router = useRouter();

  const id = router.query.id;
  const badUri = 'api.lorem.space';

  const address = `https://api.escuelajs.co/api/v1/products/${id}`;

  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  const [numOfItems, setNumOfItems] = useState(1);

  const handleIncrease = () => {
    setNumOfItems(numOfItems + 1);
  };

  const handleDecrease = () => {
    if (numOfItems === 1) {
      return;
    }

    setNumOfItems(numOfItems - 1);
  };

  return (
    <div>
      {data ? (
        <div>
          <Image
            src={
              data?.category.image.match(badUri)
                ? 'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg'
                : data?.category.image
            }
            // src='https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg'
            alt='product image'
            width={306}
            height={306}
          />

          <div>
            <h1 className={ProductStyles.single_product_title}>{data.title}</h1>
            <p className={ProductStyles.single_product_price}>
              ${data.price}.00
            </p>
            <p className={ProductStyles.single_product_desc}>
              {data.description}
            </p>
            <div>
              <span>
                <p onClick={handleIncrease} className={ProductStyles.increase}>
                  +
                </p>
                {numOfItems}
                <p onClick={handleDecrease} className={ProductStyles.decrease}>
                  -
                </p>
              </span>{' '}
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
