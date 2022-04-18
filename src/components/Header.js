import React, { useState, useEffect } from "react";
import WorkOffIcon from '@mui/icons-material/WorkOff';



function Header() {




    return <header className="header rFlex">
            <h1>Feriados No Laborables Argentina</h1>
            <WorkOffIcon 
                className="header__iconWorkOff"
            />
            </header>

}

export default Header;