import {useState, useEffect} from "react";
import useDebounce from "/Hooks/useDebounce";

function Search({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearch = useDebounce(searchTerm, 500);

    useEffect(
        ()=>{
        onSearch(debouncedSearch);
        },
       [debouncedSearch, onSearch] // dependency array
    );

 return(
    <input
    type="text"
    placeholder="Search products by name..."
    value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value)} // e.target-input box where user is typing, e.target.value-actual text inside input box
    />
 );
}
export default Search 