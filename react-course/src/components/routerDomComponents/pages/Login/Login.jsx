import {useLocation, useNavigate} from 'react-router-dom'
import {SignIn} from '../../../authComponents/SignIn'
import {useAuth} from '../../context/AuthProvider'
import cl from './login.module.css'

export const Login = () => {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from || '/'

  const handleSubmit = (data) => {
    const userEmail = data.email ? data.email : null
    auth.signin(userEmail, () => {
      navigate(from, {
        replace: true,
      })
    })
  }

  return (
    <div className={cl.login}>
      <SignIn onSubmit={handleSubmit} />
    </div>
  )
}
