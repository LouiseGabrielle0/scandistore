import React, { Component, setState } from "react";
import Nav from "../components/Nav/Nav";
import Clothes from "../components/Clothes/Clothes"
import {
 
 
  gql,
} from "@apollo/client";

// const EXCHANGE_RATES = gql`
//   query Category {
//     category {
//       products {
//         inStock
//         gallery
//         description
//         category
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//       }
//     }
// }
// `;

// function ExchangeRates() {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES);
//   console.log(data);
//   this.setState({ products: data.category.products });
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.category.products.map(({ brand }) => (
//     <div key={brand}>
//       <p>{brand}</p>
//     </div>
//   ));
// }

export default class Home extends Component {
  state = {
    products: [],
  };

    // componentWillMount () {
    //     /* attach listeners to google StreetView */
    
    //     fetch(`http://localhost:4000/`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ query: EXCHANGE_RATES }),
    //     }).then(res => {
    //         this.setState({ products: res.json()})
    //     })
    // };

  render() {
    return (
      <>
        <Nav />
        <Clothes />
        {/* {this.state.products.map((product) => {
          <div key={product.id}>hi</div>;
        })} */}
      </>
    );
  }
}
