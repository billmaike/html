//funcoes do menu

function abrirmenu() {
    if (imenu.style.transform == 'translateX(-100%)') {
        imenu.style.transform = 'translateX(0%)'
    }
    else imenu.style.transform = 'translateX(0%)'
    b1.style.overflow = "hidden"
}

function fechar() {
    if (imenu.style.transform == 'translateX(0%)') {
        imenu.style.transform = 'translateX(-100%)'    
    }
    else imenu.style.transform = 'translateX(-100%)'
    b1.style.overflow = ""
}

//FUNCOES D LOGIN


function logar() {
    if (ilogin.style.display == 'block') {
        ilogin.style.display = 'none'
        
    }
    else ilogin.style.display = 'block'
    b1.style.overflow = "hidden"
    imenu.style.transform = 'translateX(-100%)'
}

function sair() {
    if (ilogin.style.display == 'block') {
        ilogin.style.display = 'none'
        b1.style.overflow = ""
    }
    else ilogin.style.display = 'none'
} 

