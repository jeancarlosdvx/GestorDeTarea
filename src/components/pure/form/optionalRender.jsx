import { useState } from "react";



const loggedStyle = {
  bolder: "none",
  backgroundColor: "green",
  color: "white",
  fontWeigth: "bold",
};

const unloggedStyle = {
  bolder: "none",
  backgroundColor: "tomato",
  color: "white",
  fontWeigth: "bold",
};

const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
};

const OptionalRendel = () => {
  const [access, setAccess] = useState(true);
  const [nMessager, setNmessager] = useState(0);

  const addMessager = () => {
    setNmessager(nMessager + 1);
  };

  const loginAction = () => {
    setAccess(false);
  };

  const logoutAction = () => {
    setAccess(true);
  };

  let optionalButton;

  if (access) {
    optionalButton = (
      <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    );
  } else {
    optionalButton = (
      <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    );
  }

  return (
    <div>
      {optionalButton}
      {access ? (
        <div>
          {nMessager > 0 ? (
            <p>
              You have {nMessager} new message {nMessager > 1 ? "s" : null}..
            </p>
          ) : (
            <p>There are no new messages</p>
          )}
        </div>
      ) : null}
      <button className="btn btn-success" onClick={addMessager}>
        Add new messages
      </button>
    </div>
  );
};

export default OptionalRendel;
