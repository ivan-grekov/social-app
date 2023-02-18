import './mobileMenu.scss';
import SearchBar from '../search/Search';
import Sidebar from '../sidebar/Sidebar';

export default function MobileMenu() {
  return (
    <div className="mobilMenu">
      <div className="sidebarSearch">
        <SearchBar />
      </div>
      <Sidebar />
    </div>
  );
}
