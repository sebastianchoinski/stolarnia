import logo from './logo.svg';
import './App.scss';
import MainPage from './MainPage.jsx'
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Footer from './Footer.js'
import Topbar from './Topbar.js';
import Projects from './Projects.js';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog.jsx'

function App() {
  return (
    <Router>

<Navbar></Navbar>
      
      <Routes>
        <Route exact path="/" element={<MainPage></MainPage>}></Route>
        <Route exact path="/stolarnia" element={<MainPage></MainPage>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer></Footer>

    </Router>


  );
}

export default App;
