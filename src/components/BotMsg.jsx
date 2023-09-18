import react from "react";

function BotMsg(props) {
  return (
    <div className="msg_c">
      <div className="botMsg">
        <p>{props.msg}</p>
      </div>
    </div>
  );
}

export default BotMsg;
