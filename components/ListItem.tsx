"use client"

import React from "react";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}
const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href
}) => {
    return (
        <div>
            List item
        </div>
    );
}
export default ListItem;