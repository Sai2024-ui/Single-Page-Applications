"use client";

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const Counter = () => {
    const [count, setCount] = useState(0);
    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }
    function Reset(){
        setCount(0);
    }
  return (
    <>
    <div className='flex justify-center'>
        <button className='p-2 bg-sky-200 font-bold rounded-lg mt-15'><Link href='/'>Home</Link></button>
    </div>
    <div className='flex flex-col items-center h-screen w-screen p-2 mt-8'>
        <div>
            <h1 className='text-[40px] font-bold'>Counter</h1>
            <p className='text-[80px] text-center'>{count}</p>
        </div>
        <div className='flex flex-row'>
            <button onClick={Increment} className='p-2 bg-[green] rounded-lg text-[white] m-2'>Increment</button>
            <button onClick={Reset} className='p-2 bg-[yellow] rounded-lg text-[black] m-2 font-bold'>Reset</button>
            <button onClick={Decrement} className='p-2 bg-[red] rounded-lg text-[white] m-2'>Decrement</button>
        </div>
    </div>
    </>
  )
}

export default Counter