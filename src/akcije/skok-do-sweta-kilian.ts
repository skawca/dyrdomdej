export const skocDoSwetaKilian = () => {
    WA.room.onEnterLayer('mapKilian').subscribe(() => {
        WA.nav.goToRoom('Kilian.tmj')
    })

    WA.room.onEnterLayer('mapGustav').subscribe(() => {
        WA.nav.goToRoom('map2.tmj')
    })
}