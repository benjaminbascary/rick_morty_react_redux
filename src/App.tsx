import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./router/Router";
import './styles/Index.css';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
