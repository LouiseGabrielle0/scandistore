import React, { Component, setState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { graphql, Query } from "react-apollo";
import { request, gql } from "graphql-request";

const GET_CLOTHES = gql`
  {
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

export class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    request("http://localhost:4000", GET_CLOTHES).then((data) => {
      console.log(data);
      this.setState({ data: data });
      console.log("Products State: ", this.state.data);
    });
  }

  

  render() {
    
    console.log("read", this.state.data.category);
    return (
      <>
        <div>
 
       </div>
      </>
    )
  }
}

export default Clothes;
