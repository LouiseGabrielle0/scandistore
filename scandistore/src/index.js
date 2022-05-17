import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({ 
  uri: 'http://localhost:4000', // Change to localhost:4000
  cache: new InMemoryCache()
});

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

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.category.products.map(({ brand }) => (
    <div key={brand}>
      <p>
        {brand}
      </p>
    </div>
  ));
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ApolloProvider client={client}>
    <App />
   </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
