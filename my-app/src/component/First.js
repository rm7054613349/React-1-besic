
// yha css ko import kiya hai
import './First.css'


// function Item()
// {
//     return (<p className="A">Jai sri radhe krishna</p>);
// }



// using props
// function Item(props)
// {
//     return (<p className="A">{props.name}</p>);
// }




// bhut bhut important - apko yadi ui per content visible or unvisible krna hai then ham ye use krr skte hai
// using props children fn?
function Item(props)
{
    return (
    <div>
    <p className="A">{props.name}</p>

    {props.children}
    </div>);
}


export default Item;