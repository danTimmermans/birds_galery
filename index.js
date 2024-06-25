const images = document.querySelectorAll(".images-container img")

let options = {
    root: null,
    rootMargin: "-20% 0px",
    threshold: 0.5
}

function handleIntersect(entries){

    // console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)

images.forEach(image => {
    observer.observe(image)
})