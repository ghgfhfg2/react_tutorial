import React, { createContext } from "react";

const UserContext = createContext("untitle");

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="mike">
        <Sub />
      </UserContext.Provider>
    </div>
  );
}

function Sub() {
  return (
    <>
      <Sub2 />
    </>
  );
}

function Sub2() {
  return (
    <>
      <UserContext.Consumer>{(name) => <p>{name}</p>}</UserContext.Consumer>
    </>
  );
}

export default App;
