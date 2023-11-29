import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const NewColor = ({ onAddColor }) =>{
    const [color, setColor] = useState("");
    const [rgb, setRgb] = useState("#000000");
    const navigate = useNavigate();
    const handleNameChange = (e) =>{
        setColor(e.target.value);
    }

    const handleRgbChange = (e) =>{
        setRgb(e.target.value);
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        const newColor = {
            name: color,
            rgb: rgb,
          };
        onAddColor(newColor);
        setColor("")
        setRgb("#000000");
        navigate("/colors");
    }
    return(
        <div className="colorform">
            <form onSubmit={handleSubmit}>
                <label >Color Name</label>
                <input type="text"
                 value={color} 
                 onChange={handleNameChange}
                 placeholder="name"
                 name="colorname"
                 />
                 <label>Color Picker</label>
                 <input type="color" 
                 value={rgb}
                 onChange={handleRgbChange}
                 placeholder="RGB value"
                 name="colorpicker"
                 />
                 <button>Add Color!</button>
            </form>

            <Link to="/colors">Back to Color List!</Link>
        </div>
    )
}

export default NewColor;