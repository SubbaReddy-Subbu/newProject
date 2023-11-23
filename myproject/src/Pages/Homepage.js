import React from 'react';
import Newuser from "../components/Newuser"

const Homepage = () => {
        function Addition() {
            const A = parseFloat(document.getElementById("A").value);
            const B = parseFloat(document.getElementById("B").value);
            document.getElementById("Results").innerHTML=(`Addition: ${A + B}`);
        }
    
        function Multiply() {
            const A = parseFloat(document.getElementById("A").value);
            const B = parseFloat(document.getElementById("B").value);
            document.getElementById("Results").innerHTML=(`Multiplication: ${A * B}`);
        }
    
        function Division() {
            const A = parseFloat(document.getElementById("A").value);
            const B = parseFloat(document.getElementById("B").value);
            document.getElementById("Results").innerHTML=(`Division: ${A / B}`);
        }
    
        function Subtract() {
            const A = parseFloat(document.getElementById("A").value);
            const B = parseFloat(document.getElementById("B").value);
            document.getElementById("Results").innerHTML=(`Subtraction: ${A - B}`);
        }
    
        return (
            <>
            <div className=" w-[80%] mx-auto my-6">
                Calculate
                <br />
                <div class="m-6">
                <label htmlFor="A">Value Of A :  </label>
                <input id="A" type='number' />
                <br />
                <label htmlFor="B">Value Of B :  </label>

                <input id="B" type='number' classname=" 2xl border-b-2 border-red-300 border-0"/>
                <input id="B" type='number' classname="text-2xl border-b-2 border-red-300 border-0"/>

                <br />
                 </div>
               
    
                <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-black text-white  hover:bg-slate-500 hover:text-black hover:cursor-pointer' onClick={Addition}>Addition</button>
                <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-green-300 text-white hover:bg-green-400 hover:text-black hover:cursor-pointer' onClick={Multiply}>Multiply</button>
                <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-slate-500  text-white hover:bg-slate-400 hover:text-black hover:cursor-pointer' onClick={Division}>Division</button>
                <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-indigo-600 text-white  hover:bg-indigo-500 hover:text-black hover:cursor-pointer' onClick={Subtract}>Subtract</button>
    
               <p className='m-4'>Results : <p id="Results" className=" text-2xl font-bold "></p> </p>
            </div>
            <Newuser />
            </>
        )
   
}

export default Homepage