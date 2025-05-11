import "../Button/Button.css";

const Button = ({ children, variant = 'deafult', onClick, type = 'button' }) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick} type={type}>
      {children}
   </button>
  )
}
export default Button;