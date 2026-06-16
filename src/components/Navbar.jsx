import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink to="/statistics"  className="nav-link ml-3">Статистика</NavLink></li>
            <li className="nav-item"><NavLink to="/add-film"    className="nav-link ml-3">Добавить фильм</NavLink></li>
            <li className="nav-item"><NavLink to="/films"       className="nav-link ml-3">Редактирование</NavLink></li>
            <li className="nav-item"><NavLink to="/users"       className="nav-link ml-3">Пользователи</NavLink></li>
        </ul>
        <NavLink to="/login"    className="btn btn-outline-info my-2 my-sm-0">Login</NavLink>
        <NavLink to="/register" className="btn btn-outline-info my-2 my-sm-0 ml-3">Register</NavLink>
    </div>
</nav>
);

export default Navbar;
