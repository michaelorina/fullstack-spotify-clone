"use client"

import { useRouter } from "next/navigation";
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

    const router = useRouter();

    const onClick = () => {
        // Add Authethication before push
        router.push(href);
    }
    return (
        <div>
            List item
        </div>
    );
}
export default ListItem;