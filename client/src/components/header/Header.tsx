import './header.scss';

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="container">
        <div className="headerWrapper">
        <div className="headerLeft">logo</div>
        <div className="headerCenter">search</div>
        <div className="headerRight">user</div>
        </div>
      </div>
    </div>
  );
}
