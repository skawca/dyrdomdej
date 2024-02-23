export const teleport = () => {
    WA.room.onEnterLayer('Smn-korcma').subscribe(() => {
        WA.chat.sendChatMessage(`Witaj do Korćmy`)
        WA.nav.goToRoom('map2.tmj#Smn-Korcma')

        WA.room.onEnterLayer('wuchod').subscribe(() => {
            WA.nav.goToRoom('map2.tmj')
        })
    })
}
