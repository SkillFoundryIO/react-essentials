// uses destructuring for HTML attributes
function Welcome2({name, id, className}) {
    return <p id={id} className={className}>Welcome {name}</p>
}

export default Welcome2;