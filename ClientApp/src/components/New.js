import { useState } from "react";
import { closeModal, entry, postBook } from "./Lib.js";

export default function New(props) {
    const [ISBNLength, setISBNLength] = useState(0);
    const newBook = (e) => {
        const name_ = e.target.name;
        let v_ = e.target.value;
        if (name_ === "isbn") {
            setISBNLength(v_.length);
        }
        entry[name_] = v_;
    }
    /*const postBooks = ()=> {
        postBook(entry).then(r=> {
            props.refreshApp(Math.random() * 125 * Math.random())
        }).catch(e=>console.log("Error happened while posting new book: ", e))
        closeModal("new-modal")
    }*/
    const postBooks = () => {
        postBook(entry).then(r => {
            console.log("Успешно создано: ", r);
            props.refreshApp(Math.random() * 125 * Math.random());
        }).catch(e => console.log("Произошла ошибка при создании новой книги: ", e));
        closeModal("new-modal");
    }

    return (
        <div className="modal-container">
            <div className="modal-title">Новая книга</div>
            <div className="mt-15">
                <label htmlFor="Title_n">Название</label> <br />
                <input type="text" className="mt-5" id="Title_n" name="title" onChange={newBook} />
            </div>
            <div className="mt-15">
                <label htmlFor="Author_n">Автор</label> <br />
                <input type="text" id="Author_n" name="author" onChange={newBook} />
            </div>
            <div className="mt-15">
                <label htmlFor="Genre_n">Жанр</label> <br />
                <select name="genre" id="Genre_n" defaultValue={"1"} onChange={newBook}>
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
            </div>
            <div className="mt-15">
                <label htmlFor="Type_n">Тип</label> <br />
                <select name="type" id="Type_n" defaultValue={"1"} onChange={newBook}>
                    <option value={"1"}></option>
                    <option value={"2"}>Художественная литература</option>
                    <option value={"3"}>Документальная проза</option>
                    <option value={"4"}>Мемуарная литература</option>
                    <option value={"5"}>Научная и научно-популярная литература</option>
                    <option value={"6"}>Справочная литература</option>
                    <option value={"7"}>Учебная литература</option>
                </select>
            </div>
            <div className="chain">
                <div className="mt-15">
                    <label htmlFor="Year_n">Год</label> <br />
                    <input type="text" id="Year_n" maxLength={4} name="year" onChange={newBook} />
                </div>
                <div className="mt-15">
                    <label htmlFor="Count_n">Количество</label> <br />
                    <input type="number" id="Count_n" name="count" min={0} onChange={newBook} />
                </div>
            </div>
            <div className="mt-15">
                <label htmlFor="Publisher_n">Издатель</label> <br />
                <input type="text" id="Publisher_n" name="publisher" onChange={newBook} />
            </div>
            <div className="mt-15">
                <label htmlFor="ISBN_n">ISBN</label> <br />
                <input type="text" id="ISBN_n" maxLength={13} name="isbn" onChange={newBook} />
                <span>&nbsp;{ISBNLength}/13</span>
            </div>
            <div className="mt-15">
                <label htmlFor="Summary_n">Аннотация</label> <br />
                <textarea id="Summary_n" className="mt-5" name="summary" cols={102} rows={10} onChange={newBook} /> <br />
            </div>
            <div className="chain justify-btw modal-action-container">                             {/* row */}
                <div className="btn row-item" onClick={() => closeModal("new-modal")}>Отмена</div>
                {/* <div className="btn modal-action-container" onClick={()=>{postBook(entry)}}>Добавить</div> */}
                <div className="btn modal-action-container" onClick={postBooks}>Добавить</div>
            </div>

        </div>
    )
}