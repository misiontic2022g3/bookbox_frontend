import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom'
// Components
import AdminBooks from 'components/admin/books/AdminBooks'
import AdminMenu from 'components/admin/AdminMenu'
import AdminUsers from 'components/admin/users/AdminUsers'
import Layout from 'components/layout/Layout'
import BookInfo from 'components/books/BookInfo'
import Loading from 'components/misc/Loading'
// Pages
import Books from 'pages/Books'
import Home from 'pages/Home'
import MyBooks from 'pages/MyBooks'
import NotFound from 'pages/NotFound'
import UserProfile from 'pages/UserProfile'
// Routes
import AdminRoute from 'routes/AdminRoute'
import PrivateRoute from 'routes/PrivateRoute'
import useToken from 'hooks/useToken'
import AdminUserCRUD from 'components/admin/users/AdminUserCRUD'

function App() {
    const { loading, auth } = useToken()

    if (loading) return <Loading />
    if (!auth) return <Redirect to push='/home' />

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <PrivateRoute exact path='/books' component={Books} />
                    <PrivateRoute exact path='/my-books' component={MyBooks} />
                    <PrivateRoute exact path='/profile' component={UserProfile} />
                    <PrivateRoute exact path='/book/:bookId' component={BookInfo} />
                    <AdminRoute exact path='/admin' component={AdminMenu} />
                    <AdminRoute exact path='/admin/users/' component={AdminUsers} />
                    <AdminRoute exact path='/admin/users/create/' component={AdminUserCRUD} />
                    <AdminRoute exact path='/admin/users/update/:userId' component={AdminUserCRUD} />
                    <AdminRoute exact path='/admin/users/delete/:userId' component={AdminUserCRUD} />
                    <AdminRoute exact path='/admin/books' component={AdminBooks} />
                    <AdminRoute exact path='/admin/books/create/' component={AdminBooks} />
                    <AdminRoute exact path='/admin/books/update/:userId' component={AdminBooks} />
                    <AdminRoute exact path='/admin/users/delete/:userId' component={AdminBooks} />
                    <PrivateRoute component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App