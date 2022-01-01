import React, { useState, useEffect } from "react";
import WorkOffIcon from '@mui/icons-material/WorkOff';



function Header() {




    return <header className="header">
            <div className="container rFlex">
            <h1>FNLARG</h1>
            <WorkOffIcon 
                className="header__iconWorkOff"
            />
            </div>
            </header>

}

export default Header;