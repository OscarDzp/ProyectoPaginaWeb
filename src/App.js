
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Usuario from './componente/usuario';
import Somos from './componente/somos';
import Articulo from './componente/articulo';
function App() {
  return (
    <div className="App">
  <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><b>Libreria El Pirata</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
           
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <b>Mantenimiento</b> </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/Articulo">Mantenimiento Articulos</a></li>
              <li><a class="dropdown-item" href="/Usuario">Mantenimiento Usuarios</a></li>
            </ul>
          </li>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Somos"><b>¿Quiénes somos?</b></a>
          </li>
          <li class="nav-item">
                    <a class="nav-link" href="/"><b>Home</b></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</body>
    <BrowserRouter>
        <Switch>
          <Route exact path="/Usuario"  component={Usuario} />
          <Route exact path="/Somos"  component={Somos} />
          <Route exact path="/Articulo"  component={Articulo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
