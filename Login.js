import React, { useState } from 'react';
function Logins() {
    const [User, setUser] = useState("");
    const [Pass, setPass] = useState("");
    const [userErr, setuserErr] = useState(false);
    const [passErr, setpassErr] = useState(false);

    function loginhandle(e) {
        if (User.length < 3 || Pass.length < 3) {
            alert("type correct values")
        }
        else {
            alert("all goods")
        }
        e.preventDefault()
    }
    function userhandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setuserErr(true)
        }
        else {
            setuserErr(false)
        }
        setUser(item)
    }

    function passhandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setpassErr(true)
        }
        else {
            setpassErr(false)
        }
        setPass(item)
    }

    return (
        <div className='login'>
            <form onSubmit={loginhandle} >
                <h1>loggin page</h1>
                <input type='text' placeholder='enter name' onChange={userhandler} />
                {userErr ? <span>invlid name</span> : ""}
                <br /> <br />
                <input type='password' placeholder='enter Password' onChange={passhandler} />
                {passErr ? <span>invlide password </span> : ""}
                <br /> <br />
                <button type='submit' >login</button>
            </form>

        </div>
    );
}
export default Logins;
