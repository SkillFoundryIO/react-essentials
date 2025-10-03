import { colors } from '../data/sampleData.js'

function ColorList() {
    return (
        <>
            <h2>Color List</h2>
            <p>This component uses map() to render list 
                items for each color in an array.</p>
            <ul>
                {colors.map(color => (
                    <li key={color}>{color}</li>
                ))}
            </ul>
        </>
    );
}

export default ColorList