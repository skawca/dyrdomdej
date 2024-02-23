

export const teleportkorcma = () => {
    WA.room.onEnterLayer('Smn-korcma').subscribe(() => {
        WA.nav.goToRoom('Simon-Korcma.tmj')
        WA.chat.sendChatMessage(`Witaj do Korćmy 5`)
    })

    WA.room.onEnterLayer('wuchod').subscribe(() => {
        
        WA.chat.sendChatMessage(`Witaj do Korćmy 0`)
        WA.nav.goToRoom('map2.tmj')
    })
}