'use client';
import React, { use } from 'react'
import styles from './LoginPage.module.css';
import Link from 'next/link';
import { useState } from 'react';


const LoginPage = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  function tryout() {
    if (isLogged) {
      setIsLogged(false);
      setName('');
      setValue('');
    } else {
      setName(value);
      setIsLogged(true);
    }
  }
  function event(event){
    setName(event.target.value);
  }
    if (isLogged == true){
      if (name == "Sai Krishna"){
      return(
        <>
          <div className={styles.container}>
              <Link href="/"><button className={styles.button}>Home</button></Link>
              <div className={styles.card}>
                {/* <h1 className={styles.title}>Welcome {name}</h1>
                <button className={styles.button} onClick={tryout}>Log Out</button> */}
                 <Link href="/ui/Counter" className="bg-blue-300"> <button className={styles.button}>Go to Counter App</button></Link>
              </div>
          </div>
        </>
      )}
      else{
          return(
            <>
              <div>          
                <h1 className='text-[center]'>Incorrect UserName</h1>
                REFRESH PAGE
              </div>
            </>
          )
      }
    }
    else{
      return(
        <>
          <div className={styles.container}>
              <Link href="/"><button className={styles.button}>Home</button></Link>
              <div className={styles.card}>
                <h1 className={styles.title}>Please Login</h1>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="border p-2 mb-3"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <br />
                <button className={styles.button} onClick={tryout}>Log In</button>
              </div>
          </div>
        </>
      )
    }
}

export default LoginPage
