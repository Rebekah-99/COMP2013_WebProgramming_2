
//CURRENTLY ALMOST WORKS, JUST ENEDS TO RANDOMIZE COLORS ON INITIAL BOXES/NOT ALL THE SAME
import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {

    return (
        <div className="ColorBoxesContainer">
        {colors.map((color, index) => (
            <ColorBox 
            key={index}
            color={color} 
            />
            ))}
        </div>
    );
}
    