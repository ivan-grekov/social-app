import './chatOnline.scss';

const ChatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="person picture"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Jhon</span>
      </div>
    </div>
  );
};

export default ChatOnline;
