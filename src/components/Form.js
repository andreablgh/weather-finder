import React from 'react';

const Form = (props) => {
  return (
    <form className="form-container" onSubmit={props.getWeather}>
      <input className="input" type="text" name="city" placeholder="City..." autoComplete="off"></input>
      <input className="input" type="text" name="country" placeholder="Country..." autoComplete="off"></input>
      <button className="btn btn-lg"> Get weather </button>
    </form>
  )
}

export default Form;
