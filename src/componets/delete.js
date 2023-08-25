import React from 'react'
import { useState } from 'react'
import { deleteUser } from '../utils'


const Delete = () => {
    const [username, setUsername] =  useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const submitHandler = async (event) => {
        event.preventDefault()
        await deleteUser(username, email, password)
    }


    
    //delete form
    return (
        <div className='register'>
        <h2>Delete User</h2>
            <form onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)} ></input>
                </label>
                <br></br>
                 <button type='submit'>Click here to submit</button>
            </form>
            
        </div>
    )}




export default Delete