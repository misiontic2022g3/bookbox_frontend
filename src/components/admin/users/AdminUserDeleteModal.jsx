import { useState } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

import UsersApi from 'services/users.service'
import { deleteUser } from 'actions'
import useAlerts from 'hooks/useAlerts'

const mapDispatchToProps = {
    deleteUser,
}

function AdminUserDeleteModal(props) {
    const { _id, firstName, lastName, isAdmin } = props.user
    const [show, setShow] = useState(false)
    const { Toast } = useAlerts()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleDelete = async () => {
        const usersApi = new UsersApi()
        const deletedUserId = await usersApi.deleteUser({ userId: _id })
        console.log(deletedUserId)
        if (deletedUserId) {
            props.deleteUser(deletedUserId.data)
            console.log(deletedUserId.message, deletedUserId.data)
            Toast.fire({
                icon: 'success',
                title: 'Usuario eliminado!'
                })
        }
        handleClose()
    }
    return (
        <>
            <button className='btn btn-danger' onClick={handleShow}>
                Borrar
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Borrar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <strong>Nombre: </strong>
                        {firstName}
                    </p>
                    <p>
                        <strong>Apellido: </strong>
                        {lastName}
                    </p>
                    <p>
                        <strong>Rol: </strong>
                        {isAdmin ? 'Administrador' : 'Usuario'}
                    </p>
                    <p>Confirma que desea borrar?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-outline-danger'
                        onClick={handleClose}
                    >
                        Cerrar
                    </button>
                    <button className='btn btn-danger' onClick={handleDelete}>
                        Borrar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default connect(null, mapDispatchToProps)(AdminUserDeleteModal)
