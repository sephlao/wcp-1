// toggle script for navigation menu
let toggledMenu = false;
function toggleMenu() {
    toggledMenu = !toggledMenu;
    document.getElementsByClassName('menu-nav')[0].classList.toggle('expanded');
    const close = document.getElementsByClassName('cl-icon humberger')[0].classList;
    if (toggledMenu) {
        document.getElementsByClassName('menu-list site')[0].classList.add('show');
        document.getElementsByClassName('menu-list account')[0].classList.remove('show');
        close.add('close');
    } else {
        close.remove('close');
    }

}

function toggleUser() {
    document.getElementsByClassName('menu-nav')[0].classList.toggle('expanded');
    document.getElementsByClassName('cl-icon humberger')[0].classList.remove('close');
    document.getElementsByClassName('menu-list account')[0].classList.add('show');
    document.getElementsByClassName('menu-list site')[0].classList.remove('show');
}

