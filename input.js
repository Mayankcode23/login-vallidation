import { useState, useEffect } from 'react';
import './App.css';
function Input() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobail, setMobail] = useState("")
    const [alldata, setAlldata] = useState([])
    useEffect(() => {
        getlist()
    }, []);
    console.warn(data)

    function getlist() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then((result) => {
            result.json().then((resp) => {
                setData(resp)
                // console.warn("result",resp)

            })
        })
    }
    function deletedata(id) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getlist()
                alert(id)

            })
        })
    }


    const Adddata = () => {
        if (name.length !== 0) {
            setAlldata(newData => [newData, name, email, mobail])
            setName("")
            setEmail("")
            setMobail("")
        }
    }
    console.warn(alldata)
    return (
        <div className="App">
            <h2>Api called</h2>
            <table>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>mobail</th>
            </tr>
            <tr>
                <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                <td><input type="text" value={mobail} onChange={(e) => setMobail(e.target.value)} /></td><br />
                <td><button onClick={Adddata}>add</button></td>
            </tr>

                    {
                        alldata.map((val) =>
                            <tr><br/>
                                <td>{val}</td><br/>

                            </tr>
                        )
                    }

                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>

                </tr>
                {
                    data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><button onClick={() => deletedata(item.id)}>delete</button></td>


                        </tr>
                    )
                }
            </table>
        </div>

    );
}
export default Input;
