import { activeId, entry, openModal } from "./Lib";

export default function Book(props) {
    const handlingDelete = (id) => {
        activeId.id = id
        // update state
        props.stateListener(Math.random() * 848 * Math.random())
        //open edit modal
        openModal("delete-modal")
    }

    const handlingEdit = (row) => {
        Object.assign(entry, row)
        // update state
        props.stateListener(Math.random() * 548 * Math.random())
        //open edit modal
        openModal("edit-modal")
    }

    const genre = ["", "Роман-эпопея", "Роман", "Повесть", "Рассказ", "Притча", "Лирическое стихотворение",
        "Элегия", "Послание", "Эпиграмма", "Ода", "Сонет", "Комедия", "Трагедия", "Драма", "Поэма" , "Баллада"
    ]

    const type = ["", "Художественная литература", "Мемуарная литература", "Документальная проза", 
        "Научная и научно-популярная литература", "Справочная литература", "Учебная литература"
    ]

    return (
        <div className={`chain py-5 underline  ${props.item.deleted ? 'bc-red' : ''}`} key={props.item.id}>
            <div className="column id">{props.item.id}</div>
            <div className="column title">{props.item.title}</div>
            <div className="column author">{props.item.author}</div>
            <div className="column genre">{genre[props.item.genre]}</div>
            <div className="column type">{type[props.item.type]}</div>
            <div className="column year">{props.item.year}</div>
            <div className="column publisher">{props.item.publisher}</div>
            <div className="column count">{props.item.count}</div>
            <div className="column isbn">{props.item.isbn}</div>
            <div className="column summary">{props.item.summary}</div>
            <div className="column edit">
                <div className="btn edit" onClick={() => handlingEdit(props.item)}>Edit</div>
            </div>
            <div className={`column delete  ${props.item.deleted ? ' not-allowed' : ''}`}>
                <div className={`btn delete ${props.item.deleted ? ' no-event' : ''}`} onClick={() => handlingDelete(props.item.id)}>Delete</div>
            </div>        
        </div>
    )
}