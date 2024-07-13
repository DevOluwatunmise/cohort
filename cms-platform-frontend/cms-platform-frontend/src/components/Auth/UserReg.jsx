userReg

import  { useState,  } from 'react'; // useContext
import "./register.css"
// import { Link } from "react-router-dom";
import PasswordInput from '../passwordInput/passwordInput';


// import  {PaymentContext}  from '../../Context/PaymentContext';

const UserReg = () => {
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState("")
  const [bankCode, setBankCode] = useState("")
  const [password, ] = useState('');
  const [confirmpassword, ] = useState('');
  const [accountNumber,setAccountNumber ] = useState('');
  const [isSubmitting, ] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await register(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <div >
      <p className='user'>Register as user</p>
    <form className='container_reg' onSubmit={handleSubmit}>
      <p>Fullname</p>
      <input type="fullname" placeholder='enter your full name'
       value={fullname} onChange={(e) =>
        setfullname(e.target.value)} required />

      <p>Email</p>
      <input type="email" placeholder='enter your email'
       value={email} onChange={(e) => 
        setemail(e.target.value)} required />

          <div className="container_reg">
            <label className="password">Password</label>
            <PasswordInput
            type="password"
            className="input"
            name="password"
            placeholder="enter your password"
            required
            value={password}
            onChange={handleSubmit}
            />
          </div>

          <div className="container_reg">
            <label className="password">confirm Password</label>
            <PasswordInput
            type="password"
            className="input"
            name="password"
            placeholder="enter your password"
            required
            value={confirmpassword}
            onChange={handleSubmit}
            />
          </div>

          <p>Account Number</p>
      <input type="accountNumber" placeholder='enter your full account number'
       value={accountNumber} onChange={(e) => 
        setAccountNumber(e.target.value)} required />

      <p>Bank Code </p>
      <input type="BankCode" placeholder='enter your bank pin'
       value={bankCode} onChange={(e) => 
        setBankCode(e.target.value)} required />
          <button className="--btn" disabled={isSubmitting}>
                {isSubmitting ? "Signing you up..." : "Create Account"}
              </button>
    <div>
    
   </div>
    </form>
    </div>

</>
  );
};

export default UserReg;