import './sidebarFooter.scss';
import React from 'react';
import { GitHub, Copyright } from '@mui/icons-material';
// import Rsschool from '../../assets/svg/rs_school_js.svg';

// const rsLogo = (src='../../../public/assets/svg/rs_school_js.svg');

// console.log(Rsschool);

export default function SidebarFooter() {
  return (
    <div className="sidebarFooter">

      <div className="sidebarFooterBody">
      <ul className="sidebarFooterItems">
        <li className="sidebarFooterItem">
          <a href="//github.com/ivan-grekov" className="sidebarFooterItemLink" title="ivan-grekov"><GitHub className="gitHubIcon" /> ivan-grekov</a>
        </li>
        <li className="sidebarFooterItem"><a href="//github.com/tribisalex" className="sidebarFooterItemLink" title="tribisalex">
          <GitHub className="gitHubIcon" /> tribisalex</a>
        </li>
        <li className="sidebarFooterItem"><a href="//github.com/SpiriT-L" className="sidebarFooterItemLink" title="SpiriT-L">
          <GitHub className="gitHubIcon" /> SpiriT-L</a>
        </li>
      </ul>
      </div>
      <div className="sidebarFooterFooter">
      <img
          src="../../assets/svg/rs_school_js.svg"
          className="rsschoolIcon"
          alt="logo rsschool"
        />
      <span className='copiryng' ><Copyright className="gitHubIcon" /> 2023</span>
      </div>

    </div>
  );
}
