import React from 'react';
import { useQuery, gql } from '@apollo/client';

const PRODUCTS_QUERY = gql`
  query Query {
    products {
      id
      name
      price
    }
  }
`;


const Products = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Products</h2>
        {data.products.map((product) => (
          <div key={product.id}>
            {product.name} - {product.price}
          </div>
        ))}
    </div>
  );
};

export default Products;