import React, { Component, setState } from "react";
import Nav from "../components/Nav/Nav";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const EXCHANGE_RATES = gql`
  query Category {
    category {
      products {
        inStock
        gallery
        description
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);
  this.setState({ products: data.category.products });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.category.products.map(({ brand }) => (
    <div key={brand}>
      <p>{brand}</p>
    </div>
  ));
}
export default class Home extends Component {
  state = {
    products: [],
  };
  render() {
    return (
      <>
        <Nav />
        <ExchangeRates />
        {this.state.products.map((product) => {
          <div key={product.id}>hi</div>;
        })}
      </>
    );
  }
}
