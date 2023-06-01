import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const userMessage = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="message">{userMessage}</h1>
}
export default Message
