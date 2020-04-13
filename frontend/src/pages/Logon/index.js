import React from 'react';
//import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

//import api from '../../services/api'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

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

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Create an account
                    </a>

                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}