import React, { useState } from "react";
import UseReducer from "./Component/UseReducer";
import UseState from "./Component/UseState";
import UseEffect from "./Component/UseEffect";
import UseRef from "./Component/UseRef";
import UserContext from "./Component/UseContext";
import ChildContext from "./Component/ChildContext";
import UseMemo from "./Component/UseMemo";
import UseCallBack from "./Component/UseCallBack";

const App = () => {
  let [user,setUser]=useState([])
  return (
    <div>
      <UserContext.Provider value={[user,setUser]}>
        <UseState />
        <UseEffect />
        <UseReducer />
        <ChildContext />
        <UseRef />
        <UseMemo/>
        <UseCallBack/>
      </UserContext.Provider>
    </div>
  );
};

export default App;
