import { MoviesGried } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage (){
    const query = useQuery();
    const search= query.get("search");
   
    const debouncedSearch= useDebounce(search, 300)
   return <div>
        <Search/> 
         <MoviesGried key={debouncedSearch} search={debouncedSearch} /></div>
}