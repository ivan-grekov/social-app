import './main.scss';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/Feed';
import Rightbar from '../rightbar/Rightbar';

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="mainWrapper">
            <Sidebar />
            <Feed />
            <Rightbar />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
