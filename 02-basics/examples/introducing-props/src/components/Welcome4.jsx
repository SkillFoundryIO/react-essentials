// default class of blue, but will be overridden by htmlProps if provided
function Welcome4({name, ...htmlProps}) {
    return <p 
      className="blue"
      {...htmlProps}>
        Welcome {name}
    </p>
}

export default Welcome4;