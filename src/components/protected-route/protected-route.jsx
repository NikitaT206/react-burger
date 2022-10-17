import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router"

function ProtectedRoute ({ children, ...props }) {
  const { isLoggedIn } = useSelector(state => state.user)

  return (
    <Route {...props}>
      { isLoggedIn ? children : <Redirect to="/login"/> }
    </Route>
  )
}

export default ProtectedRoute;