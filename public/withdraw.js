function Withdraw() {
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  let userBalance = ctx.users[ctx.users.length - 1].balance;
  let userName = ctx.users[ctx.users.length - 1].name;

  function validate(number) {
    if (isNaN(number) || number < 0) {
      //alert("Error: Please enter a valid number");
      setStatus(
        "Please enter a valid number."
      );
      return false;
    }
    return true;
  }

  function overdraw(number) {
    if (Number(number) > userBalance) {
      setStatus(
        "Withdrawal amount cannot be greater than your current balance."
      );
      clearForm();
      return false;
    }
    return true;
  }

  function handleWithdrawal(amount) {
    if (!validate(amount) || !overdraw(amount)) return;
    setBalance(userBalance - amount);
    setStatus("");

    ctx.users[ctx.users.length - 1].balance -= Number(amount);
    setShow(false);
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

    return (
      <Card
        bgcolor="dark"
        header={<><h1>Withdraw</h1></>}
        status={status}
        body={show ? (
          <>
          <h2>Welcome!</h2>
            <h4>Current Balance: $ {userBalance}</h4>
            <br />
            Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter an amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button type="submit" className="btn btn-light" class="btn btn-secondary btn-lg" disabled={withdraw === ""} onClick={() => handleWithdrawal(withdraw)} >Withdraw Amount</button>
          </>
          ):(
            <>
            <h5>Success!</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>
              Make Another Withdrawal
            </button>
            </>
            )}
      />
    )
  }