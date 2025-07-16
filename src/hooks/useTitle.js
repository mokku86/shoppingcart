import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(() => {
        if(title){
            document.title = `${title} / Shopping Cart`;
        }
    }, [title]);
    return null;
}
