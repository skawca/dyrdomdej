import { TIMEOUT } from "dns"

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


let pocas = 0
const casnik = 15000

export const popupNoweWokno = () => {
WA.ui.openPopup('MiC-wokno', 'konsola', [
    {
        // knefl zatwaric
        label:'štres',
        callback: async (popup) => { 
      
            //Mužik běži ke koordinaće          
      await WA.player.moveTo(0,0,10);
      await WA.player.moveTo(600,0,10);
      await WA.player.moveTo(400,600,10);
      await WA.player.moveTo(200,0,10);
      await WA.player.moveTo(600,500,10);
        await WA.player.moveTo(20,20,10);
      
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

WA.ui.openPopup('MiC-wokno2', 'změn počas', [
{
// knefl zatwaric

    label:'zyma', callback: async (popup) => { 
    // w konsoli pruwowac hac adicija tez funguje 
    console.log (pocas) 

    pocas = pocas + 1
    
    //pruwuje, hac je wariabla pocas runa abo njeruna
    if (pocas % 2 === 1 ) 
    WA.room.hideLayer ('MiC-wodaZyma'),
    setTimeout ( () => WA.room.showLayer ('MiC-kacki'), casnik)
    // setTimeout ( () => WA.room.hideLayer ('MiC-kacki'), casnik)

    else 
    WA.room.showLayer ('MiC-wodaZyma'),
    WA.room.hideLayer ('MiC-kacki')
    
}}])
}