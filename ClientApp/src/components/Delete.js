import { useEffect } from "react";
import { activeId, closeModal, deleteBook } from "./Lib";

export default function Delete (props) {
    const deleteBooks = () => {
        deleteBook(activeId.id).then(r=> {
            props.refreshApp(Math.random() * 248 * Math.random())
        })
        .catch(e=>console.log("Книга не была удалена: ", e))
        closeModal("delete-modal")
    }

    useEffect(()=>{
    }, [props.stateListener])

    return (
        <div className="modal-container">
            <div className="modal-title">Удаление книги</div>
            <p>Вы уверены, что хотите удалить выбранную книгу?</p>
            <div className="chain justify-btw modal-action-container">                             {/* row */}
                <div className="btn " onClick={()=>closeModal("delete-modal")}>Отмена</div>
                <div className="btn modal-action-container" onClick={deleteBooks}>Да</div>
            </div>
        </div>
    )
}