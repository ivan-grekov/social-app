import './home.scss';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Home() {
  return (
    <>
      <Header />
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
