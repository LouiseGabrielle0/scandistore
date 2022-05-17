import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getClothesQuery = gql`
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
  
`

export class Clothes extends Component {
    render() {
      console.log(this.props)
    return (
      <div>Clothes</div>
    )
  }
}

export default graphql(getClothesQuery)(Clothes)