import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import { setUserBook, deleteUserBook } from 'actions'
import UserBooksApi from 'services/userBooks.service'
import Loading from 'components/misc/Loading'
import useAlerts from 'hooks/useAlerts'

const mapStateToProps = state => {
    return {
        myBooks: state.myBooks,
        user: state.user,
    }
}

const mapDispatchToProps = {
    setUserBook,
    deleteUserBook,
}

function BookButton(props) {
    const history = useHistory()
    const { myBooks, bookId } = props
    const { _id: userId } = props.user

    const [loading, setLoading] = useState(true)
    const [userBookId, setUserBookId] = useState(null)
    const [style, setStyle] = useState('warning')
    const { Toast } = useAlerts()

    const setStateUserBookId = id => {
        if (id) {
            setUserBookId(id)
            setStyle('danger')
        } else {
            setUserBookId(null)
            setStyle('warning')
        }
    }

    const createAction = async userBooksApi => {
        let createdUserBookId = await userBooksApi.createUserBook({
            userId,
            bookId,
        })
        if (createdUserBookId) {
            props.setUserBook({
                _id: createdUserBookId.data,
                bookId,
                userId,
            })
            console.log(createdUserBookId.message, createdUserBookId.data)
            Toast.fire({
                icon: 'success',
                title: 'Libro agregado a favoritos!'
                })
            history.push('/my-books')
        }
    }

    const deleteAction = async userBooksApi => {
        let deletedUserBookId = await userBooksApi.deleteUserBook({
            userBookId,
        })
        if (deletedUserBookId) {
            props.deleteUserBook(deletedUserBookId.data)
            console.log(deletedUserBookId.message, deletedUserBookId.data)
            Toast.fire({
                icon: 'success',
                title: 'Libro eliminado de favoritos!'
                })
            history.push('/my-books')
        }
    }

    const handleClick = async () => {
        setLoading(true)
        const userBooksApi = new UserBooksApi()
        getUserBookId()
        if (!userBookId) {
            await createAction(userBooksApi)
        } else {
            await deleteAction(userBooksApi)
        }
        setLoading(false)
    }

    const getUserBookId = () => {
        setLoading(true)
        const [book] = myBooks.filter(book => book.bookId === bookId)
        if (book) {
            setStateUserBookId(book._id)
        } else {
            setStateUserBookId()
        }
        console.log('actual userBookId : ', userBookId)
        setLoading(false)
    }

    useEffect(() => {
        return getUserBookId()
    }, [myBooks]) // eslint-disable-line react-hooks/exhaustive-deps

    return loading ? (
        <Loading />
    ) : (
        <button className={`btn btn-${style} w-100`} onClick={handleClick}>
            {userBookId ? 'Eliminar de mis libros' : 'Añadir a mis libros'}
        </button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookButton)
