const UserInfo = (props) => (
    <div className="headerSecContainer">
        <div className="headerSec">
        <div className="avatar">{props.avatar}</div>
        <div className="userTime">
            <p>{props.username}</p>
            <p id="timeStamp">{props.timestamp}</p>
        </div>
        </div>
    </div>
  );

export default UserInfo