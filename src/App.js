import logo from './logo.svg';
import './App.scss';
import MainPage from './MainPage.js'
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
  return (

    <div className="App">
      <MainPage></MainPage>
    </div>


  );
}

export default App;
