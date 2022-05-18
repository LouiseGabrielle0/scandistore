import React, { Component, setState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { graphql, Query } from "react-apollo";
import { request, gql } from "graphql-request";
import './Clothes.scss';

const GET_CLOTHES = gql`
  {
    category {
      products {
        name
        brand
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

export class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    request("http://localhost:4000", GET_CLOTHES).then((data) => {
      console.log(data);
      this.setState({ data: data.category.products });
      console.log("Products State: ", this.state.data);
    });
  }

  

  render() {
    
    console.log("read", this.state.data);
    return (
      <>
        <div className="container-fluid">
            <div className="row">
            {this.state.data.map((product) => {
          let cleanString = product.description;
          let cleaned = cleanString.replace(/<\/?[^>]+(>|$)/g, "");
          let trimmed = cleaned.substring(0, 31);
          
          return <div className="col-4 product">
          <img alt="productpic" src={product.gallery[0]} className="product__image" />
          <h6>{product.name}</h6>
       
          {product.prices.map((price) => {
            return <p>{price.currency.symbol}{price.amount}</p>;
          })}
          <p className="prices"><b>{product.prices.amount}</b></p>
          </div>
        })}
            </div>
      
       </div>
      </>
    )
  }
}

export default Clothes;
