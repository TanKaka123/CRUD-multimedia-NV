import axios from "axios";
import env from "react-dotenv";
import listAvatarDefault from "../data/avatarDefault.json";

const login = (setCurrentUser, setStatus, username, password) => {
  axios
    .post(``, {
      username: username,
      password: password,
    })

    .then(function (response) {
      if (response.status == 200) {
        setCurrentUser(response.data);
        setStatus(200);
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {  
        setCurrentUser(response.status);
      }
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error)
      setStatus(error.response.status);
    });
};

const register = (currentAccount, setStatus) => {
  const indexRandom = Math.floor(Math.random() * listAvatarDefault.length);

  axios
    .post(``, {
      username: currentAccount.username,
      password: currentAccount.password,
      email: currentAccount.email,
      fullname: currentAccount.fullname,
      avatar: "https://i.ibb.co/5BVrNL6/dog.png",
    })
    .then(function (response) {
      setStatus(200);
    })
    .catch(function (error) {
      //   setStatus(error.response.status);
      setStatus(error.response.status);
    });
};
export { login, register };
