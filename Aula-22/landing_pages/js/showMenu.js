var menu  = document.getElementById("menu-header")
    var icone = document.getElementById("icone-menu")

    if (getComputedStyle(menu).display == 'None')
    {
        menu.style.display = 'flex'
        icone.classList.remove('fa-bars')
        icone.classList.add('fa-times')
    }
    else
    {
        menu.style.display = 'None'
        icone.classList.add('fa-bars')
        icone.classList.remove('fa-times')
    }