/* ОПИСАНИЕ КОНТЕНТА
    Тут будет 2 колонки: 
    1. список с фильмами слева
    2. карточка с фильмом для редактиврования [FilmView с установленными полями фильма]

    Над FilmView с фильмом будет кнопка, чтобы начать редактировать этот фильм 
    Под FilmView кнопка сохранить
*/

import React from 'react'
import FilmView from '../components/FilmView';
// const styles = { }

export default function AllFilms() {
    return (         
    <div className="row" style={{margin: "1vh 0vw"}}>
        {/* список фильмов */}
        <div className="col-3">
        {/* Поиск */}
        <div className="input-group mb-2 mr-sm-2">
            <input type="text" className="form-control" placeholder="Найти фильм" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Искать</button>
            </div>
        </div>
        {/* Список */}
        <div className="list-group">
            <button type="button" className="list-group-item list-group-item-action active">
            I am active
            </button>
            <button type="button" className="list-group-item list-group-item-action">First</button>
            <button type="button" className="list-group-item list-group-item-action">Second</button>
            <button type="button" className="list-group-item list-group-item-action">Third</button>
        </div>
        
        </div>
        
        {/* Редактирование фильма */}
        <div className="col-9">
            <FilmView />
        </div>
    </div>
    )
}
