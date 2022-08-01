window.addEventListener("load", AddWebsitePrefix);

function AddWebsitePrefix() {
    const HRefElements = document.querySelectorAll("[href]");
    const SrcElements = document.querySelectorAll("[src]");
    
    for (let Index = 0; Index < HRefElements.length; Index++) {
        const Element = HRefElements[Index];
        let HRef = Element.getAttribute("href");
        if (HRef.startsWith("/") && !HRef.startsWith("/Cardinal-Engine-Website")) {
            Element.setAttribute("href", "/Cardinal-Engine-Website" + HRef);
        }
    }
    
    for (let Index = 0; Index < SrcElements.length; Index++) {
        const Element = SrcElements[Index];
        let Src = Element.getAttribute("src");
        if (Src.startsWith("/") && !Src.startsWith("/Cardinal-Engine-Website")) {
            Element.setAttribute("src", "/Cardinal-Engine-Website" + Src);
        }
    }
}
