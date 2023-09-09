import logo from './logo.svg';
import './App.css';
import { FaCopy } from "react-icons/fa";
import { useState } from 'react';
import { ToastContainer, collapseToast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from 'copy-to-clipboard';


function App() {

  let UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let LowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let Number = '01234567809';
  let Symbols = '!@#$%^&*()_+';


  let[passlength,setpasslength]=useState(10);
  let[finalpass,setfinalpass]=useState('')
  let[innum,setinnum]=useState(false);
  let[inup,setinup]=useState(false);
  let[inlow,setinlow]=useState(false);
  let[insym,setinsym]=useState(false);
  
  


  function datasave(){
      if(innum==false && inup==false && inlow==false && insym==false ){
          toast.error('Please select any Checkbox')
      }
      else{

        let alldata='';
        if(innum){
          alldata=alldata+Number;
        }
        if(inup){
          alldata=alldata+UpperCase;
        }
        if(inlow){
          alldata=alldata+LowerCase;
        }
        if(insym){
          alldata=alldata+Symbols;
        }
        passcheck(alldata);
        toast.success('success')

      }
     

      
  }

let passcheck=(alldata)=>{
    let datalength=alldata.length;
    let finalpass='';
    for(let i=0; i<passlength; i++){
      
      let mathpass=Math.round(Math.random()*datalength);
      
      finalpass=finalpass+alldata.charAt(mathpass);
      setfinalpass(finalpass)
      
    }

   
}

function copytext(){
    copy(finalpass);
    toast('Text Copied ');
    
}


  return (
  
    <div className=" bg-[rgba(0,0,0,0.7)] py-[150px] relative">
    <ToastContainer position='top-center '/>

          <div className='max-w-[400px] mx-auto shadow-lg bg-white px-[40px] py-[40px] rounded'>
              <h3 className='text-[25px] text-center font-bold'>Password Generator</h3>
              <div className='relative'>

                <input type="text" value={finalpass}  className='w-[100%] h-[45px] border-2 border-yellow-800 my-[10px] '/>

                <FaCopy onClick={copytext} className='absolute right-[5px] top-4 text-[30px] cursor-pointer'/>
              </div>
              <div className='flex justify-between my-[10px]'>
                 <h5 className='font-bold'>Password Length</h5>
                 <input type="number" value={passlength} onChange={(e)=>setpasslength(e.target.value)} className='w-[100px] border-2 border-yellow-800 text-center'/>
              </div>
              <div className='flex justify-between my-[10px]'>
                 <h5 className='font-bold'>Include Number</h5>
                 <input type="checkbox" checked={innum} onChange={(e)=>setinnum(e.target.checked)} className='w-[100px] border-2 border-yellow-800 '/>
              </div>
              <div className='flex justify-between my-[10px]'>
                 <h5 className='font-bold'>Include Uppercase</h5>
                 <input type="checkbox" checked={inup} onChange={(e)=>setinup(e.target.checked)} className='w-[100px] border-2 border-yellow-800 '/>
              </div>
              <div className='flex justify-between my-[10px]'>
                 <h5 className='font-bold'>Include Lowercase</h5>
                 <input type="checkbox" checked={inlow} onChange={(e)=>setinlow(e.target.checked)} className='w-[100px] border-2 border-yellow-800 '/>
              </div>
              <div className='flex justify-between my-[10px]'>
                 <h5 className='font-bold'>Include Symbol</h5>
                 <input type="checkbox" checked={insym} onChange={(e)=>setinsym(e.target.checked)} className='w-[100px] border-2 border-yellow-800 '/>
              </div>
              <div className='text-center pt-[20px]'>
                  <button onClick={datasave} className='bg-[red] p-[5px_10px] text-white rounded'>Generat Password</button>
                
              </div>
            
          </div>
          <div className='max-w-[500px] bg-[#e8ddd5] py-[15px] text-center absolute right-0 bottom-0 px-[20px] text-[18px]'>
            Design and Developed by Teja Ram Choudhary
          </div>
    </div>
  );
}

export default App;
