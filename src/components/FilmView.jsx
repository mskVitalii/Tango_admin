/*
  В этом файле описывается, как выглядит фильм
  Тут будет поле для картинки preview
  Описание в виде тэга textarea,
  таблица с данными по режиссёру, актёрскому составу итд
  Все поля можно при нажатии редактировать
  
  Этот компонент будет в добавлении фильма и 
  при нажатии на значок редактирования в списке фильмов
*/

import React from 'react'

const styles = {
  divCard: {
    height: "40vh",
  },
  // divCardHeader: {
  //   margin: ".3rem .5rem 1rem .5rem",
  // },
  divCardCont: {
    width: "100%",
    height: "60%",
  },
  divCardMedia: {
    width: "100%",
    height: "100%",
  },
  InputF: {
    width: "100%",
    height: "100%",
  },
  inputFSpan: {
    margin: "10% auto",
  },
};

export const FilmView = () => (
<div>
  <div className="card" style={{width: '18rem'}}>
    <img className="card-img-top" src="https://" alt="profile" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text</p>
    </div>
  </div>
  
  <div className="card" style={styles.divCard}>
  <div className="card-header">
    <p className="card-header-title">Добавление фильма</p>
  </div>
  <div className="card-container" style={styles.divCardCont}>
    <div style={styles.divCardMedia}>
      <div className="file is-boxed" style={styles.InputF}>
        <label className="file-label" style={styles.InputF}>
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta" style={styles.InputF}>
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label" style={styles.inputFSpan}>
              Выберите файл...
            </span>
          </span>
        </label>
      </div>
    </div>
  </div>
  <div className="card-container">
    <p>Описание\теги\блабла</p>
  </div>
  </div>
</div>
);

export default FilmView;