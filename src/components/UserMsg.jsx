import react from "react";

function UserMsg(props) {
  return (
    <div className="msg_u">
      <div className="userMsg">
        <p>{props.msg}</p>
      </div>
    </div>
  );
}

export default UserMsg;
