
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Remove 'show' class from all tab content items
    tabContentItems.forEach(item => item.classList.remove('show'));

    // Remove 'tabs-border' class from all tab items
    tabItems.forEach(item => item.classList.remove('tabs-border'));

    // Add 'tabs-border' class to the clicked tab item
    this.classList.add('tabs-border');

    // Get the corresponding tab content item
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Add 'show' class to the corresponding tab content item
    tabContentItem.classList.add('show');
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

