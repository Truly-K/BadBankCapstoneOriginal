function Spa() {
    return (
      <HashRouter>
        <NavBar/>
        <h1>Welcome to bad bank!</h1>
        <UserContext.Provider value={{users:[{name:'Truly',email:'klinglertruly@gmail.com',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component = {Home} />
            <Route path="/CreateAccount/" component = {CreateAccount} />
            <Route path="/login/" component = {Login} />
            <Route path="/deposit/" component = {Deposit} />
            <Route path="/withdraw/" component = {Withdraw} />
            <Route path="/alldata/" component = {AllData} />
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
  