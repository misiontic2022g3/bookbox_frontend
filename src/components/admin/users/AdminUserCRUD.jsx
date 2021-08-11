import { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'

import HeaderPage from 'components/misc/HeaderPage'
import Loading from 'components/misc/Loading'

// import { getUser, setUser, deleteUser } from 'actions'
import UsersApi from 'services/users.service'
import UserForm from './UserForm'

function AdminUserCRUD() {
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        isAdmin: false,
    })
    const { userId } = useParams()

    // const create = () => {}
    // const update = () => {}
    // const delete = () => {}

    if (history.location.pathname.includes('create')) {
        console.log('Modo nuevo')
    }
    if (history.location.pathname.includes('edit')) {
        console.log('Modo edición')
    }
    if (history.location.pathname.includes('delete')) {
        console.log('Modo eliminar')
    }

    const fetchUser = async () => {
        const usersApi = new UsersApi()
        const res = await usersApi.getUser({ userId })
        if (res.data) {
            console.log(res.message)
            setForm({ ...res.data })
        }
        setLoading(false)
    }

    useEffect(() => {
        if (userId) {
            fetchUser()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading />

    return (
        <main className='container'>
            <HeaderPage title='Usuario' />
            <section className='row row-cols-1 row-cols-md-2 g-4'>
                <article className='col d-flex justify-content-md-end'>
                    <div
                        className='card text-dark bg-warning m-3'
                        style={{ width: '320px' }}
                    >
                        <figure className='text-center mt-3'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='150'
                                height='150'
                                fill='currentColor'
                                className='bi bi-person-circle'
                                viewBox='0 0 16 16'
                            >
                                <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                                <path
                                    fillRule='evenodd'
                                    d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                                />
                            </svg>
                        </figure>
                        <div className='card-body'>
                            <h6 className='card-title'>
                                <strong>Nombre:</strong>
                            </h6>

                            <p className='card-text'>{form.firstName}</p>
                            <h6 className='card-title'>
                                <strong>Apellido:</strong>
                            </h6>
                            <p className='card-text'>{form.lastName}</p>
                            <h6 className='card-title'>
                                <strong>Correo eléctronico:</strong>
                            </h6>
                            <p className='card-text'>{form.email}</p>
                            <h6 className='card-title'>
                                <strong>Contraseña:</strong>
                            </h6>
                            {form.password === form.repeatPassword ? (
                                <p className='card-text'>Coinciden</p>
                            ) : (
                                <p className='card-text text-danger'>
                                    No coinciden
                                </p>
                            )}

                            <h6 className='card-title'>
                                <strong>Rol:</strong>
                            </h6>
                            <p className='card-text'>
                                {form.isAdmin ? 'Administrador' : 'Normal'}
                            </p>
                        </div>
                    </div>
                </article>
                <article className='col d-flex justify-md-content-start'>
                    <div
                        className='card text-dark bg-warning m-3'
                        style={{ width: '320px' }}
                    >
                        <div className='card-body'>
                            <UserForm
                                form={form}
                                setForm={setForm}
                                background='warning'
                            />
                        </div>
                        <button className='btn btn-outline-dark mx-3 mb-3'>
                            Actualizar
                        </button>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default AdminUserCRUD
