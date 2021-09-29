import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AccountDetails from './components/AccountDetails/AccountDetails'
import CreateAccount from './components/CreateAccount/CreateAccount'
import DisplayAccounts from './components/DisplayAccounts/DisplayAccounts'
import DisplayTransactions from './components/DisplayTransactions/DisplayTransactions'
import LoanTransaction from './components/LoanTransaction/LoanTransaction'
import MainSection from './components/MainSection/MainSection'
import TransferMoney from './components/TransferMoney/TransferMoney'


const Routing = () => {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <MainSection />
          </Route>
          <Route exact path="/transfer/:id">
            <TransferMoney />
          </Route>
          <Route exact path="/create">
            <CreateAccount />
          </Route>
          <Route exact path="/accounts">
            <DisplayAccounts />
          </Route>

          <Route exact path="/accounts/:id">
            <AccountDetails />
          </Route>
          <Route exact path="/loans/:id">
            <LoanTransaction />
          </Route>
          <Route exact path="/transactions/:id">
            <DisplayTransactions/>
          </Route>
        </Router>
      </div>
    );
}

export default Routing
