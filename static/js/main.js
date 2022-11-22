let scroll_button = document.getElementById('main-button')
let scroll_to = document.getElementById('contact-title')

scroll_button = scroll_button.addEventListener('click', scroll)

function scroll() {
    scroll_to.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}