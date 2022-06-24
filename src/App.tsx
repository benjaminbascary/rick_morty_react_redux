import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./router/Router";
import './styles/Index.css';

window.onload = function() {
  document.body.style.opacity = '1';
}
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
