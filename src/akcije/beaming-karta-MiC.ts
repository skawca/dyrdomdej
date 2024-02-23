export const beamMiC = () => {
    WA.room.onEnterLayer('MiC-beaming').subscribe(() => {
        WA.nav.goToRoom('MiC-Klick-pimper.tmj#cil')
    })

    // @ Kilian - zaplec Twoj layer za mnje !!!
    WA.room.onEnterLayer('k-MiC-beaming').subscribe(() => {
        WA.nav.goToRoom('MiC-Klick-pimper.tmj#cil')
    })
    
    // @ Simon - zaplec Twoj layer za mnje !!!
    WA.room.onEnterLayer('Smn-MiC-beaming').subscribe(() => {
        WA.nav.goToRoom('MiC-Klick-pimper.tmj#cil')
    })

}

