
import './App.css';
import Header from './components/Layout/Header'
import Content from './pages/Content'
import Footer from './components/Layout/Footer'
function App() {
  return (
    <div className='App'>

      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    </div>
  );
}

export default App;
