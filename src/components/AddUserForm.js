import { Component } from "react";
import "./AddUserForm.css";
export default class AddUserForm extends Component {
  state = {
    searchValue: "",
  };

  handleOnChange = (e) => {
    
    this.setState({
        searchValue:e.target.value,
    })
  
  };
  handelOnSubmit=(e)=>{
    
    e.preventDefault();
    if (!this.state.searchValue) {
        alert(` Name is empty `);
        return;
      }


this.props.onSubmit(this.state.searchValue);


  }

  render() {
    return (
      <div className="AddUserForm">
        <form className="AddUserForm__form" onSubmit={this.handelOnSubmit}>
          <input
            placeholder="Search by username"
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleOnChange}

          ></input>
          <button type="submit" className="btn btn-primary ml-3">
            Add
          </button>
        </form>
      </div>
    );
  }
}
