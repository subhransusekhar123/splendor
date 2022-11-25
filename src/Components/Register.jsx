import React from 'react';

const Register = () => {
    const [state,setState] = React.useState({
        name:"",
        age:""
    });

    const changeHandler = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("user_details",JSON.stringify(state));
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' onChange={changeHandler}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">age</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='age' onChange={changeHandler}/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register