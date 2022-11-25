import React, { useEffect } from 'react'

const Login = () => {
    const [emailSpan, setEmailSpan] = React.useState(false);
    const [passSpan, setPassSpan] = React.useState(false);

    const [state,setState] = React.useState({
        email:"",
        password:""
    });

    const changeHandler = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(state.email.length < 1 ){
            setEmailSpan(true);
        }else if(state.password.length < 3){
            setPassSpan(true);
        }
        else{
            console.log(state);
        }
    }
    return (
        <div className='form-size' onSubmit={submitHandler}>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={changeHandler}/>
                    {
                        emailSpan ? <div className='alert text-danger'>Lorem ipsum dolor sit.</div> : ""
                    }
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name='password'onChange={changeHandler}/>
                    {
                        passSpan ? <div className='alert text-danger' >Lorem ipsum dolor sit.</div> : ""
                    }
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;