import React from "react";

interface HeaderProps{
    children: React.ReactNode;
    className?:string;
}
const Header: React.FC<HeaderProps> = ({
    children,
    className
}) =>{
    return(
        <div>
            Hello Header!
        </div>
    );
}

export default Header;