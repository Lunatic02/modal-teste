const botaoLogin = document.querySelector('.logar-se');
const modal = document.querySelector('.modal-login')
const botaoFechar = document.querySelector('.x')

botaoLogin.addEventListener('click', function(e){
    e.preventDefault()
    modal.classList.add('ativo')
})
botaoFechar.addEventListener('click', function(e){
    e.preventDefault()
    modal.classList.remove('ativo')
})