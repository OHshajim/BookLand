const getStoredBook = () => {
    const StoredBook = localStorage.getItem('Books')
    if (StoredBook) {
        return JSON.parse(StoredBook)
    }
    return [];
}
const saveStoredBook = id => {
    const storedBooks = getStoredBook()
    const exist = storedBooks.find(bookId => bookId === id)
    if (!exist) {
        storedBooks.push(id)
        localStorage.setItem('Books', JSON.stringify(storedBooks))
    }
}



// for read part
const getStoredReadBook = () => {
    const StoredBook = localStorage.getItem('ReadBooks')
    if (StoredBook) {
        return JSON.parse(StoredBook)
    }
    return [];
}
const saveStoredReadBook = id => {
    const storedBooks = getStoredReadBook()
    const exist = storedBooks.find(bookId => bookId === id)
    if (!exist) {
        storedBooks.push(id)
        localStorage.setItem('ReadBooks', JSON.stringify(storedBooks))
    }

}
export { saveStoredBook, getStoredBook, saveStoredReadBook, getStoredReadBook}