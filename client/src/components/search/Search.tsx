import './search.scss';
import { Search } from '@mui/icons-material';

export default function SearchBar() {
  return (
    <div className="searchbar">
      <Search className="searchIcon" />
      <input
        placeholder="Search for friend, post or video"
        className="searchInput"
      />
    </div>
  );
}
