//funcoes do menu

function abrirmenu() {
    if (imenu.style.display == 'block') {
        imenu.style.display = 'none'
        
    }
    else imenu.style.display = 'block'
    b1.style.overflow = "hidden"
}

function fechar() {
    if (imenu.style.display == 'block') {
        imenu.style.display = 'none'
        b1.style.overflow = ""
    }
    else imenu.style.display = 'none'
}

//FUNCOES D LOGIN

function logar() {
    if (ilogin.style.display == 'block') {
        ilogin.style.display = 'none'
        
    }
    else ilogin.style.display = 'block'
    b1.style.overflow = "hidden"
}

function sair() {
    if (ilogin.style.display == 'block') {
        ilogin.style.display = 'none'
        b1.style.overflow = ""
    }
    else ilogin.style.display = 'none'
}

