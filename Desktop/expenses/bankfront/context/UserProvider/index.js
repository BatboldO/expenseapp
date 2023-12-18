import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formUserData, setLoginUserData] = useState({
    email: "naraa@gmail.com",
    password: "",
    rePassword: "",
    name: "",
    currency_type: "",
    balance: 0,
  });

  const changeFormUserData = (key, value) => {
    setLoginUserData({ ...formUserData, [key]: value });
  };

  const login = async () => {
    console.log("email", formUserData.email);
    console.log("pass", formUserData.password);
    if (!formUserData.email || !formUserData.password) {
      alert("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }

    if (!formUserData.email.includes("@")) {
      alert("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:3000/auth/signin", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.response.data.message}`, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async () => {
    if (
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.rePassword ||
      !formUserData.name
    ) {
      alert("Хоосон талбаруууд байж болохгүй");
      return;
    }

    if (formUserData.password !== formUserData.rePassword) {
      alert("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8008/auth/signup", {
        email: formUserData.email,
        password: formUserData.password,
        name: formUserData.name,  
      });
      console.log(data);
      setUser(data.user);
      router.push("/step-one");
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, { autoClose: 3000 });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        formUserData,
        changeFormUserData,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;