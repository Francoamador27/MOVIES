import { MoviesGried } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter,Route,Routes, Navigate, Link} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

  
  export function App() {
    return (
        <BrowserRouter>
      <header>
            <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
         <Link to="/">Home </Link>
        
      
        </header>
        <main>

        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/movies/:movieID" element={<MovieDetails/>} />
          <Route path="*" element={<Navigate replace to="/" />} />


          </Routes>
        
        </main>

        </BrowserRouter>

    );
  }