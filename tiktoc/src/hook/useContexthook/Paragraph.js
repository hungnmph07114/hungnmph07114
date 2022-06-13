import React, {useContext} from "react";
import  {ThemeContext} from './ThemContext'
function Paragraph() {
    const context = useContext(ThemeContext)

    return(
        <div className={context.theme}>
       <p> Học React js</p>
        </div>
    )
}
export default Paragraph;