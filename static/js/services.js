let services = document.querySelectorAll('[class="services-options"]');

for (let i = 0; i < services.length; i++) {
    let service = services[i].addEventListener(
        'click',
        function click(service) {
            inactive_services(services, i);
        });
}

function inactive_services(services, active) {
    for (let i = 0; i < services.length; i++) {
        if (i === active) {
            if (services[active].style.width === "100%") {
                services[active].style.width = "30%";
                services[active].style.display = 'flex';
            }
            else {
                services[active].style.width = "100%";
                services[active].style.display = 'block';
            }
        }
        if (i !== active) {
            if (services[i].style.display === "none") {
                services[i].style.display = "flex";
            }
            else {
                services[i].style.display = "none";
            }
        }
    }
    return inactive
}

