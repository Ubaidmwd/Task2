import { useState } from "react";
import { signupUser, signinUser } from "../reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
function Auth() {
  const [fullname, setFullname] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [auth, setAuth] = useState("signin");
  const { loading, error } = useSelector((state) => state.user);
  const authenticate = () => {
    if (auth == "signin") {
      dispatch(signinUser({ fullname, email, phone, password }));
    } else {
      dispatch(signupUser({ email, password }));
    }
  };

  return (
    <div>
      {loading && (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )}
      <h1>please {auth}!</h1>
      {error && <h5>{error}</h5>}
      {auth == "signin" ? (
        ""
      ) : (
        <input
          type="fullname"
          value={fullname}
          placeholder="fullname"
          onChange={(e) => setFullname(e.target.value)}
          style={{
            margin: "40px",
            width: "50%",
            background: "white",
            height: "5vh",
            color: "black",
          }}
        />
      )}
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        style={{
          margin: "40px",
          width: "50%",
          background: "white",
          height: "5vh",
          color: "black",
        }}
      />
      {auth == "signin" ? (
        ""
      ) : (
        <input
          type="phone"
          value={phone}
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
          style={{
            margin: "40px",
            width: "50%",
            background: "white",
            height: "5vh",
            color: "black",
          }}
        />
      )}
      <input
        type="password"
        value={password}
        placeholder="password"
        autocomplete="off"
        onChange={(e) => setPassword(e.target.value)}
        style={{
          margin: "40px",
          width: "50%",
          background: "white",
          color: "black",
          height: "5vh",
          color: "black",
        }}
      />
      {auth == "signin" ? (
        <h6 onClick={() => setAuth("signup")}>Dont have an account ?</h6>
      ) : (
        <h6 onClick={() => setAuth("signin")}>Already have an account?</h6>
      )}
      <button
        className="btn #ff4081 pink accent-2"
        onClick={() => authenticate()}
      >
        {auth}
      </button>
    </div>
  );
}

export default Auth;
