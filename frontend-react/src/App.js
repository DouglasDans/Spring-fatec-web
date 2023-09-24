import {Route, Routes} from "react-router-dom"
import "./styles.css";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import CadastroProduto from "./pages/CadastroProduto";


export default function App() {
  	return (
		<Routes>
			<Route exact path="/" element={<Home/>}/>
			<Route exact path="produtos/catalogo" element={<Catalogo/>}/>
			<Route exact path="produtos/cadastro" element={<CadastroProduto/>}/>
		</Routes>
  	);
}
