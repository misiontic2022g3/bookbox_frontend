import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsers } from 'actions'
import UsersApi from 'services/users.service'

function useUsers() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const fetchUsers = async () => {
        const usersApi = new UsersApi()
        const res = await usersApi.getUsers()
        console.log(res.message)
        if (res.data) {
            dispatch(getUsers(res.data))
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchUsers()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return { users, loading }
}

export default useUsers
