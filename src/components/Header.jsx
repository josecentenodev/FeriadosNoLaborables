import React, { useState, useEffect } from "react";
import WorkOffIcon from '@mui/icons-material/WorkOff';



function Header() {
    const [headerText, setHeaderText] = useState("FNL ARG")



    return <header className="header">
            <div className="container rFlex">
            <h1>{headerText}</h1>
            <WorkOffIcon 
                className="header__iconWorkOff"
            />
            </div>
            </header>

}

export default Header;