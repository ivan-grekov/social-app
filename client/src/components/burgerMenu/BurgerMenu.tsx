import './burgerMenu.scss';
import { Menu, Close } from '@mui/icons-material';

const burgerMenu = document.querySelector('.burgerMenu');
const open = document.querySelector('.burgerMenuIconOpen');
const close = document.querySelector('.burgerMenuIconClose');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.sidebarContainer');

const activeMenu = () => {
  if (open!.classList.contains('active')) {
    open!.classList.remove('active');
    close!.classList.add('active');
    sidebar!.classList.add('sidebarActive');
  } else {
    close!.classList.remove('active');
    open!.classList.add('active');
    sidebar!.classList.remove('sidebarActive');
  }
};

burgerMenu?.addEventListener('click', activeMenu);
container?.addEventListener('click', activeMenu);

export default function BurgerMenu() {
  return (
    <div className="burgerMenu">
      <div className="burgerMenuIconOpen active">
        <Menu className="burgerMenuIcon " />
      </div>
      <div className="burgerMenuIconClose">
        <Close className="burgerMenuIcon" />
      </div>
    </div>
  );
}
