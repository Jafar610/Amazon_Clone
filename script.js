const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close_btn');

menu.addEventListener('click', ()=>{
    sidebar.style.display="block";
});
closeSidebar.addEventListener('click', ()=>{
    sidebar.style.display="none";
})
