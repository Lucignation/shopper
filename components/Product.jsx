import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({ product }) => {
  console.log(product);
  const badUri = 'api.lorem.space';
  return (
    <div>
      <Link href={'/product/' + product.id}>
        <Image
          src={
            product.category.image.match(badUri)
              ? 'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg'
              : product.category.image
          }
          // src='https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg'
          alt='product image'
          width={306}
          height={306}
        />
      </Link>
      <h3>{product.title}</h3>

      <p>${product.price}.00</p>
    </div>
  );
};

export default Product;
