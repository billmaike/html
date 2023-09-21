//funcoes do menu

function abrirmenu() {
    if (imenu.style.transform == 'translateX(100%)') {
        imenu.style.transform = 'translateX(0%)'
        
    }
    else imenu.style.transform = 'translateX(0%)'
    b1.style.overflow = "hidden"
    
}

function fechar() {
    if (imenu.style.transform == 'translateX(0%)') {
        imenu.style.transform = 'translateX(100%)'    
    }
    else imenu.style.transform = 'translateX(100%)'
    b1.style.overflow = ""
}



