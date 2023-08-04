import { useEffect } from "react";

module.exports = function useFavicon(url) {
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
    

