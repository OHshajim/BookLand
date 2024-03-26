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
export { saveStoredBook, getStoredBook }