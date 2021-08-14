import HeaderPage from 'components/misc/HeaderPage'
import UserBooksContainer from 'components/books/UserBooksContainer'

function MyBooks() {
    return (
        <main className='container-fluid mx-0 px-0'>
            <HeaderPage title='Mis Libros' />
            <section className='container'>
                <UserBooksContainer />
            </section>
        </main>
    )
}

export default MyBooks
