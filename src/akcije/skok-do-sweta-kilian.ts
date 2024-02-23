export const skocDoDruhehoSweta = () => {

    WA.room.onEnterLayer('mapKilian').subscribe(() => {
        WA.nav.goToRoom('Kilian.tmj')
    })

    WA.room.onEnterLayer('mapGustav').subscribe(() => {
        WA.nav.goToRoom('map2.tmj')
        // map2.tmj je wot Simona
    })

    WA.room.onEnterLayer('MiC-SprungKilian').subscribe(() => {
        WA.nav.goToRoom('Kilian.tmj')
    })

    
}