const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('navList');
const menuElement = document.querySelectorAll('.navElement')

menuButton.addEventListener('click', () => {
  menuList.classList.toggle("hide");
})

menuElement.addEventListener('click', () => {
  menuList.classList.toggle("hide");
})
