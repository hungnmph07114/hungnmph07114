import React,{useContext} from "react";
import {ThemeContext} from "./ThemContext"
import UseContent3 from "./UseContent3";

// Theme : Dank/ Light
function UseContent() {
    const context = useContext(ThemeContext)
    return(
        <div style={{ padding:20}}>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <UseContent3/>
        </div>
    )
}export default UseContent;