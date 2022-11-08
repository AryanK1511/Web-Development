// Configuring the bootstrap popover used in the search results page
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
});
