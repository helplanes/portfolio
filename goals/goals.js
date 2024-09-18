document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        const id = checkbox.id;
        const checked = localStorage.getItem(id) === 'true';
        checkbox.checked = checked;

        checkbox.addEventListener("change", function() {
            localStorage.setItem(id, checkbox.checked);
        });
    });
});