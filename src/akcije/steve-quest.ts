let wotrezk = 0 

export const steveQuest = () => {
    WA.room.onEnterLayer('k-steve').subscribe(() => {
        if (wotrezk === 0) {   
             WA.chat.sendChatMessage('Dobry dźeń pućowar, trjebam pšeńcu za swój chlěb, dźi mi prošu kusk pšeńcy wot šerjenja wotewzać.', 'Pinćnik Steve')
             wotrezk = 1
            } else if (wotrezk === 2) {
                WA.chat.sendChatMessage('Dźakuju zo sy mi pšeńcu přinjesł, tu maš kluč za korčmu na druhej stronje swěta.', 'Pinćnik Steve')
                wotrezk = 0 
            }
        } 
    )

    WA.room.onEnterLayer('k-serjenjo').subscribe(() => {
        if (wotrezk === 1) {   
            WA.chat.sendChatMessage('Witaj pućowar, je Steve će pósław. Wón je chcył hižo dołho swoju přencu wotewzać. Tu maš', 'Serjenjo Jochen')
            wotrezk = 2
           }
       } 
    )  
}