import { useEffect, useState } from "react";
import "./style.css";
import Book from "./Book.js";
import Delete from "./Delete.js";
import Edit from "./Edit.js";
import New from "./New.js";
import { getDefault, openModal } from "./Lib.js";

export default function Home(props) {

  const [dataList, setDataList] = useState([]);
  const [refreshData, setRefreshData] = useState(0);
  const [stateListener, setStateListener] = useState(0)
  /*useEffect (()=>{
    getDefault().then(data=>{
      setDataList(data);

    })
  },[])*/
  useEffect(() => {
    getDefault().then(data => {
      setDataList(data)
    }).catch(e => console.log("Ошибка в домашней странице: ", e))
  }, [refreshData])
  return (
    <main>
      <h3>Система для ведения учета книг</h3>
      <div className="chain add-btn items-center content-center">           {/**row*** */}
        <div className="btn add" onClick={() => openModal("new-modal")}>+</div>
      </div>
      <br /> <br />
      <div className="notifications spacer-20">
        {/*****************************/}
      </div>

      <section className="chain justify-btw items-center filter">               {/**row*** */}
        <div className="modal-title row-item">Фильтр</div>
        <div className="chain items-center filter-items row-item">            {/**row*** */}
          <button className="me-15 row-item">Очистить фильтры</button>
          <div >
            <label htmlFor="All_f">Все&nbsp;</label>
            <input type="checkbox" className="items-center" id="All_f" name="All"></input>
          </div>
          <div >
            <label htmlFor="Title_f">Название (А-Я)&nbsp;</label>
            <input type="checkbox" className="items-center" name="Title" id="Title_f"></input>
          </div>
          <div >
            <label htmlFor="Author_f">Автор (А-Я)&nbsp;</label>
            <input type="checkbox" className="items-center" name="Author" id="Author_f"></input>
          </div>
          <label  htmlFor="Genre_f">Жанр</label> <br />
          <select  name="Genre" id="Genre_f" defaultValue={"1"}>
            <option value="1"></option>
            <option value="2">Роман-эпопея</option>
            <option value="3">Роман</option>
            <option value="4">Повесть</option>
            <option value="5">Рассказ</option>
            <option value="6">Притча</option>
            <option value="7">Лирическое стихотворение</option>
            <option value="8">Элегия</option>
            <option value="9">Послание</option>
            <option value="10">Эпиграмма</option>
            <option value="11">Ода</option>
            <option value="12">Сонет</option>
            <option value="13">Комедия</option>
            <option value="14">Трагедия</option>
            <option value="15">Драма</option>
            <option value="16">Поэма</option>
            <option value="17">Баллада</option>
          </select>
          <label  htmlFor="Type_f">Тип</label> <br />
          <select  name="Type" id="Type_f" defaultValue={"1"}>
            <option value={"1"}></option>
            <option value={"2"}>Художественная литература</option>
            <option value={"3"}>Документальная проза</option>
            <option value={"4"}>Мемуарная литература</option>
            <option value={"5"}>Научная и научно-популярная литература</option>
            <option value={"6"}>Справочная литература</option>
            <option value={"7"}>Учебная литература</option>
          </select>
        </div>
      </section>
      <div className="chain underline hdr">              {/**row*** */}
        <div className="column id">ID</div>
        <div className="column title">Название</div>
        <div className="column author">Автор</div>
        <div className="column genre">Жанр</div>
        <div className="column type">Тип</div>
        <div className="column year">Год</div>
        <div className="column publisher">Издатель</div>
        <div className="column count">Количество</div>
        <div className="column isbn">ISBN</div>
        <div className="column summary">Аннотация</div>
      </div>
      {
        dataList.length === 0 ?
          <div className="mt-15 waiting">Загрузка<div className="loading">...</div></div> :
          dataList.map(item => <Book item={item} key={item.id} stateListener={setStateListener} />)
      }
      <section>
        <section className="modal new-modal hidden">
          <New refreshApp={setRefreshData} />

        </section>
        <section className="modal edit-modal hidden">
          <Edit stateListener={stateListener} refreshApp={setRefreshData} />

        </section>
        <section className="modal delete-modal hidden">
          <Delete stateListener={stateListener} refreshApp={setRefreshData} />

        </section>

      </section>
    </main>
  )
}