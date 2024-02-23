export const skocDoSwetaKilian = (smer: 'hin'|'wročo') => {
    WA.room.onEnterLayer('konc').subscribe(() => {
        if (smer === 'hin') {
            WA.nav.goToRoom('Kilian.tmj')
        } else {
            WA.nav.goToRoom('map2.tmj')
        }
    })
}