import { useEffect } from "react";

const  useFavicon = (url) =>{
    useEffect(()=>{
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = url;
    },[]);
    }
    export default useFavicon;

