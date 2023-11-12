import logo from './logo.svg';
import './App.scss';
import MainPage from './MainPage.js'
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Footer from './Footer.js'
import Topbar from './Topbar.js';
import Projects from './Projects.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Topbar></Topbar>
      <Routes>
        <Route exact path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
      <Footer></Footer>

    </Router>


  );
}

export default App;
