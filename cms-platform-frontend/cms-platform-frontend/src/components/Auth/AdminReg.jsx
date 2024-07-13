
import  { useState,  } from 'react'; // useContext
import "./Register.css"
// import { Link } from "react-router-dom";
import PasswordInput from '../Auth/PasswordInput';



const AdminReg = () => {
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
      <p className='user'>Register as admin</p>
    <form className='container_reg' onSubmit={handleSubmit}>
      <p>Full Name</p>
      <input type="fullname" placeholder='enter your full name'
       value={fullname} name='fullname' className='in-put' onChange={(e) =>
        setfullname(e.target.value)} required />

      <p>Email</p>
      <input type="email" placeholder='enter your email'
       value={email} name='email' className='in-put' onChange={(e) => 
        setemail(e.target.value)} required />

          <div className="">
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

          <div className="">
            <label className="password">confirm Password</label>
            <PasswordInput
            type="password"
            className="input"
            name="confirm password"
            placeholder="enter your confirm password"
            required
            value={confirmpassword}
            onChange={handleSubmit}
            />
          </div>

          <p>Account Number</p>
      <input type="accountNumber" placeholder='enter your full account number'
       value={accountNumber} name='' onChange={(e) => 
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

export default AdminReg;