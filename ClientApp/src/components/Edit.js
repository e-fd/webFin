import { entry, closeModal, updateBook } from "./Lib";
import { useState, useEffect } from "react";

export default function Edit(props) {
    const [genre, setGenre] = useState(0);
    const [type, setType] = useState(0);
    const [data, setData] = useState({});

    const editBooks = (e) => {
        const name_ = e.target.name
        let v_ = e.target.value
        entry[name_] = v_
    }

    const updateBooks = () => {
        updateBook(entry).then(r => {
            console.log("Успешно обновлено: ", r)
            props.refreshApp(Math.random() * 248 * Math.random())
        })
            .catch(e => console.log("Книга не была обновлена: ", e))
        closeModal("edit-modal")
    }

    useEffect(()=>{
        setGenre(entry.genre);
        setType(entry.type);
        setData(entry)
    }, [props.stateListener])

    return (
        <div className="modal-container">
            <div className="modal-title">Редактировать книгу</div>
            <div className="chain">
                <div className="mt-15">
                    <label htmlFor="Title_e">Название</label> <br />
                    <input type="text" className="mt-5" id="Title_e" defaultValue={data.title} onChange={editBooks} name="title" />
                </div>
                <div className="mt-15">
                    <label htmlFor="Author_e">Автор</label> <br />
                    <input type="text" id="Author_e" defaultValue={data.author} onChange={editBooks} name="author" />
                </div>
            </div>
            <div className="chain">
                <div className="mt-15">
                    <label htmlFor="Genre_e">Жанр</label> <br />
                    <select name="genre" id="Genre_e" defaultValue={genre} onChange={editBooks}>
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
                    <label htmlFor="Type_e">Тип</label> <br />
                    <select name="type" id="Type_e" defaultValue={type} onChange={editBooks}>
                        <option value={"1"}></option>
                        <option value={"2"}>Художественная литература</option>
                        <option value={"3"}>Документальная проза</option>
                        <option value={"4"}>Мемуарная литература</option>
                        <option value={"5"}>Научная и научно-популярная литература</option>
                        <option value={"6"}>Справочная литература</option>
                        <option value={"7"}>Учебная литература</option>
                    </select>
                </div>
            </div>
            <div className="chain">
                <div className="mt-15">
                    <label htmlFor="Year_e">Год</label> <br />
                    <input type="text" id="Year_e" name="year" />
                </div>
                <div className="mt-15">
                    <label htmlFor="Count_e">Количество</label> <br />
                    <input type="text" id="Count_e" name="count" />
                </div>
            </div>
            <div className="mt-15">
                <label htmlFor="Publisher_e">Издатель</label> <br />
                <input type="text" id="Publisher_e" name="publisher" />
            </div>
            <div className="mt-15">
                <label htmlFor="ISBN_e">ISBN</label> <br />
                <input type="text" id="ISBN_e" maxLength={13} name="isbn" />
            </div>
            <div className="mt-15">
                <label htmlFor="Summary_e">Аннотация</label> <br />
                <textarea id="Summary_e" className="mt-5" name="summary" cols={102} rows={10} /> <br />
            </div>
            <div className="chain justify-btw modal-action-container">                             {/* row */}
                <div className="btn " onClick={() => closeModal("edit-modal")}>Отмена</div>
                <div className="btn modal-action-container" onClick={updateBooks}>Сохранить</div>
            </div>

        </div>
    )
}