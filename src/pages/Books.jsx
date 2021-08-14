import BooksContainer from 'components/books/BooksContainer'
import HeaderPage from 'components/misc/HeaderPage'

function Books() {
    return (
        <main className='container-fluid mx-0 px-0'>
            <HeaderPage title='Libros' />
            <section className='container'>
                {/* <form className='d-flex'>
                    <input
                        type='search'
                        className='form-control me-2  alert-warning'
                        placeholder='Buscar un libro'
                    />
                    <button className='btn btn-outline-dark' type='submit'>
                        Buscar
                    </button>
                </form> */}
            <BooksContainer />
            </section>
        </main>
    )
}

export default Books
