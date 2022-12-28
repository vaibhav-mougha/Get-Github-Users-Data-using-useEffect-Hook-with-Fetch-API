import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GithubUsers from "./GithubUsers";
import Loading from "./Loading";

const UseEffectApi = () => {
  const [users, SetUsers] = useState([]);
  const [loading,setLoading] = useState(true)

  const getUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://api.github.com/users");
      // console.log(response)
      SetUsers(await response.json());
      setLoading(false);
    } catch (error) {
      console.log('My error is:'+ error)
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <>
     <GithubUsers users={users} />
    </>
  );
};

export default UseEffectApi;
