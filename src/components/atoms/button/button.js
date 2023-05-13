

const Button = (props) => (
    <button
    className="button" 
    name={props.name} 
    {...props}>{props.title}</button>
)

export default Button