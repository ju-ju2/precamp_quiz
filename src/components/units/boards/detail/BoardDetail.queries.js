const { gql } = require("@apollo/client");

export const FETCH_PRODUCT = gql`
  query typeSetting($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
