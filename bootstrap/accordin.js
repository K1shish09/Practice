function toggleAccordion(event) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
