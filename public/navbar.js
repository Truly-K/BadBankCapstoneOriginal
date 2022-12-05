function NavBar(){
    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#" data-toggle="tooltip" data-placement="bottom" title="Click here to return home."><img src="BadBank-01.png" className="img-fluid" alt="Responsive image"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <li class="nav-item">
              <a class="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Use this link to create an account." >Create Account</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Click here to make a deposit.">Deposit</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Click here to make a withdrawal.">Withdraw</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#/alldata/" data-toggle="tooltip" data-placement="bottom" title="Click here to see account data.">AllData</a>
            </li>

          </ul>
        </div>
      </nav>
      </>
    );
  }