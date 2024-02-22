// soundy a hudzba
const mamaspew = WA.sound.loadSound('/src/hudzba/mamaspew.mp3')
const confighudzba = {
    volume: 0.2,
    loop: true,
    rate: 3,
    detune: 1,
    delay: 0,
    mute: false,
    seek: 0,
    }

const trompetaspew = WA.sound.loadSound('/src/hudzba/trompeta.mp3')
const configtrompeta = {
        volume: 0.2,
        loop: true,
        rate: 1,
        detune: 1,
        delay: 0,
        mute: false,
        seek: 0,
        }

export const popupNoweWokno = () => {
WA.ui.openPopup('wokno', 'Hallo swet', [
    {
        // knefl zatwaric
        label:'Zacin běž',
        callback: async (popup) => { 
      
            //Mužik běži ke koordinaće          
      await WA.player.moveTo(0,0,10);
      await WA.player.moveTo(500,280,10);
      await WA.player.moveTo(300,0,10)
      
      // wokno so zacini    
      // popup.close()
    }
     
    },
    {
        // knefl zatwaric
        label:'spěw',
        callback: (popup) => {mamaspew.play(confighudzba)}
        // wokno so zacini
    },
    {
        // knefl zatwaric
        label:'trompeta',
        callback: (popup) => {trompetaspew.play(configtrompeta)}
        // wokno so zacini
    },
    
])


WA.ui.openPopup('wokno2', 'Ty sy tajka hipotata', [])
}




