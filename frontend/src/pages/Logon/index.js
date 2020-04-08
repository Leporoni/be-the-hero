import React from 'react';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import './styles.css'

export default function Logon() {
    return (
       <div className="logon-container">
           <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Login</h1>

                    <input placeholder="Your Id" />
                    <button className="button" type="submit">Enter</button>


                </form>
           </section>

           <img src={heroesImg} alt="Heroes" />

       </div>
    );
}