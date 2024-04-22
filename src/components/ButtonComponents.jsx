
// const ButtonComponent = props => {
//     <div>
//         <button className={props.className}>
// {props.title}
//         </button>
//     </div>
// console.log(props);
// }
// export default ButtonComponent;
function ButtonComponent(props) {
    return (
    <div>
         <button className={props.className}>
 {props.title}
       </button>
     </div>)
}

export default ButtonComponent;