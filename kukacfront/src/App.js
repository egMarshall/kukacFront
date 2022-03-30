import Exercicio1 from "./components/Exercicio1/Exercicio1"
import Exercicio2 from "./components/Exercicio2/Exercicio2"
import Exercicio3 from "./components/Exercicio3/Exercicio3"
import Exercicio4 from "./components/Exercicio4/Exercicio4"
import Footer from "./components/Footer/Footer"
import Home from "./components/pages/Home/Home"

function App() {
  return (
    <div>
      <Home/>
      <Exercicio1/>
      <Exercicio2/>
      <Exercicio3/>
      <Exercicio4/>
      <Footer/>
    </div>
  );
}

export default App