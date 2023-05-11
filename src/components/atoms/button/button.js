

const Button = (props) => (
    <button
    style={{width:'fit-content',minWidth:'200px',height:'50px',alignSelf:'center',marginTop:'20px'}} 
    name={props.name} 
    {...props}>{props.title}</button>
)

export default Button