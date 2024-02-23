export const teleport = () => {
    WA.room.onEnterLayer('Teleport').subscribe(() => {
        WA.chat.sendChatMessage(`Super, sy so Teleportowaw.`, 'Günter')
        WA.nav.goToRoom('map2.tmj#cil')
    })
}