import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    last: '',
    status1: false,
    status2: false,
    Submit1: false,
  }

  firstName = event => {
    const {first} = this.state
    this.setState({first: event.target.value})
  }

  lastName = event => {
    const {last} = this.state
    this.setState({last: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {first, last} = this.state
    if (first !== '' && last !== '') {
      this.setState({Submit1: true, first: '', last: ''})
    }
    if (first === '') {
      this.setState({status1: true})
    }
    if (first !== '') {
      this.setState({status1: false})
    }
    if (last === '') {
      this.setState({status2: true})
    }
    if (last !== '') {
      this.setState({status2: false})
    }
  }

  onBlurFirst = () => {
    const {first, last} = this.state

    if (first === '') {
      this.setState({status1: true})
    } else {
      this.setState({status1: false})
    }
  }

  onBlurLast = () => {
    const {first, last} = this.state
    if (last === '') {
      this.setState({status2: true})
    } else {
      this.setState({status2: false})
    }
  }

  onClickBut = () => {
    this.setState({Submit1: false})
  }

  render() {
    const {last, first, status1, status2, Submit1} = this.state
    return (
      <div className="con9">
        <div>
          <div className="con8">
            <h1>Registration</h1>
          </div>
          <div className="con10">
            {Submit1 ? (
              <div className="con7">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                  alt="success"
                />
                <p>Submitted Successfully</p>
                <button
                  type="submit"
                  className="but6"
                  onClick={this.onClickBut}
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <div>
                <form onSubmit={this.onSubmitForm}>
                  <div className="div6">
                    <label htmlFor="input1">FIRST NAME</label>
                    <div>
                      <input
                        type="text"
                        id="input1"
                        placeholder="First name"
                        value={first}
                        onChange={this.firstName}
                        onBlur={this.onBlurFirst}
                        className="inDiv"
                      />
                    </div>
                    {status1 && <p>Required</p>}
                  </div>
                  <div className="div6">
                    <label htmlFor="input2">LAST NAME</label>
                    <div>
                      <input
                        className="inDiv"
                        type="text"
                        id="input2"
                        placeholder="Last name"
                        value={last}
                        onChange={this.lastName}
                        onBlur={this.onBlurLast}
                      />
                    </div>
                    {status2 && <p>Required</p>}
                  </div>
                  <button type="submit" className="but6">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
