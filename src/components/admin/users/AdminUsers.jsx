import Loading from 'components/misc/Loading'
import HeaderPage from 'components/misc/HeaderPage'
import AdminUsersTable from 'components/admin/users/AdminUsersTable'
import AdminUserEditModal from 'components/admin/users/AdminUserEditModal'

import useUsers from 'hooks/useUsers'

function AdminUsers() {
     const { users, loading } = useUsers()

    if (loading) return <Loading />

    return (
        <main className='container'>
            <HeaderPage title='Administración de usuarios'>
                <AdminUserEditModal isNew />
            </HeaderPage>
            <AdminUsersTable users={users} />
        </main>
    )
}

export default AdminUsers
