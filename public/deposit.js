function Deposit() {
  const [deposit, setDeposit] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  let userBalance = ctx.users[ctx.users.length - 1].balance;
  let userName = ctx.users[ctx.users.length - 1].name;

  function validate(number) {
    if (isNaN(number) || number < 0) {
      setStatus(
        "Please enter a valid number."
      );
      return false;
    }
    return true;
  }

  function handleDeposit(amount) {
    if (!validate(amount)) return;
    setBalance(userBalance + amount);
    setStatus("");

    ctx.users[ctx.users.length - 1].balance += Number(amount);
    setShow(false);
  }  

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

    return (
      <Card
        bgcolor="dark"
        header={<><h1>Deposit</h1></>}
        status={status}
        body={show ? (
          <>
            <h2>Welcome!</h2>
            <h4>Current Balance: $ {userBalance}</h4>
            <br />
            Amount
            <br />
            <input type="input" className="form-control" id="depositAmount" placeholder="Enter an amount" value={deposit} onChange={(e) => setDeposit(e.currentTarget.value)}/>
            <br />
            <button type="submit" className="btn btn-light" class="btn btn-secondary btn-lg" disabled={deposit === ""} onClick={() => handleDeposit(deposit)}>Make Deposit</button>
          </>
          ):(
            <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
            </>
              )}
      />
    )
  }