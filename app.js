const menuEl = document.getElementById('menu');
const lateralMenuEl = document.getElementById('lateral-menu');

//Quando clicar ele chama a função handleMenu
menuEl.addEventListener('click', handleMenu);

function handleMenu() {
//Pega todas as classes do lateralMenu
  const lateralMenuClassList = Array.from(lateralMenuEl.classList);
  const isActive = lateralMenuClassList.find(el => el === 'active');

  if(isActive) {
    lateralMenuEl.classList.remove('active');
    return
  }

  lateralMenuEl.classList.add('active');
}