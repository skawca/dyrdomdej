let cheska = 0 

export const wobydlerjo = () => {
    WA.room.onEnterLayer('k-wobydler1').subscribe(() => {
        if (cheska == 0){
             WA.chat.sendChatMessage('Jowe zno nichtu bydli!', 'Wobydler Kilian')
             cheska = 1
        }
        }
    )

    WA.room.onEnterLayer('k-wobydler2').subscribe(() => {
        if (cheska == 0){
        WA.chat.sendChatMessage('Jowe tejš!', 'Wobydler Simon')
        cheska = 0
        }
        }
    )
    }

    
    