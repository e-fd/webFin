export const testData = [
    {ID: 1, Title: "Блоха в овечьей шкуре", Author: "Леонардо да Винчи", Genre: "Притча"},
    {ID: 2, Title: "Гамлет", Author: "Уильям Шекспир", Genre: "Трагедия"},
    {ID: 3, Title: "Горе от ума", Author: "Александр Грибоедов", Genre: "Комедия"},
    {ID: 4, Title: "Мастер и Маргарита", Author: "Михаил Булгаков", Genre: "Роман"},
];

export const entry = {
    title: "test title",
    author: "test title",
    genre: "Комедия",
    type: "Справочная литература",
    year: 1999, 
    publisher: "test title",
    count: 10,
    isbn: 9999999999999,
    summary: "test text"
};

export const activeId = {
    id: 0
};

export const filter = {
    Title: false,
    All: false,
    Author: false,
    Genre: null,
    Type: null,
};

const url = "api/book";

export async function getDefault(){
    const res = await fetch(url);

    if(!res.ok && res.status !== 200){
        console.log("Failed getting default data: ", res);
        notifyUser("Something went wrong, please refresh the page.");
        return [];
    }

    const result = await res.json();
    return result;
};

export async function postBook(newBook){
    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
            "content-type": "application/json"
        }
    })

    if(!res.ok){
        console.log("Failed creating new book: ", res)
        notifyUser("Could not create your book, please try again.")
        return {msg: res}
    }

    return await res.json()
}

export async function updateBook(updateBook){
    const res = await fetch(url + "/" + updateBook.id,{
        method: "PUT",
        body: JSON.stringify(updateBook),
        headers: {
            "content-type": "application/json"
        }
    })

    if(!res.ok){
        console.log("Failed updating appointment: ", res);
        notifyUser("Could not update your book, please try again.");
        return {msg: res};
    }

    return res;
};

export async function deleteBook(id){
    const res = await fetch(url + "/" + id, {
        method: "DELETE"
    })

    if(!res.ok){
        console.log("Failed deleting book: ", res)
        notifyUser("Something went wrong, please refresh the page.")
        return {msg: res}
    }

    return res
}


export function notifyUser(msg){
    const notificationEl = document.querySelector(".notifications")
    notificationEl.innerHTML = msg ? msg : ""
    if(msg)
    setTimeout(() => {
        notificationEl.innerHTML = "";
    }, 12000);
};

export function openModal(modal){
    const modal_ = document.querySelector("."+modal);
    if(modal_){
        modal_.classList.remove("hidden");
    }
};

export function closeModal(modal){
    const modal_ = document.querySelector("." + modal)
    if(modal_){
        modal_.classList.add("hidden")
    }
};