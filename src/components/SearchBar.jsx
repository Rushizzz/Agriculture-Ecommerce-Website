import { useNavigate } from 'react-router-dom';
import searchHIcon from '../icons/searchH.png';
import { useRef } from 'react';

const SearchBar = () => {
  const searchBarRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    console.log("working")
    const searchValue = searchBarRef.current.value;
    navigate(`/search?query=${searchValue}`);
    searchBarRef.current.value = ""
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder='search products'
        className='searchBar'
        ref={searchBarRef}
      />
      <div className="search-btn" onClick={handleSearch}>
        <img src={searchHIcon}/>
      </div>
    </div>
  );
}

export default SearchBar;