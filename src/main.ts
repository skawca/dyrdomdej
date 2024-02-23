/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { wulicDistancu } from "./pomocnik/wulic-distancu";
import {popupNoweWokno} from './akcije/popup';
import { teleport } from "./akcije/teleport-simon";
import { skocDoSwetaKilian } from "./akcije/skok-do-sweta-kilian";
import {beamMiC} from "./akcije/beaming-karta-MiC";
import { steveQuest } from "./akcije/steve-quest";
import { hrow } from "./akcije/hrow";
import { wobydlerjo } from "./akcije/wobydler";
import { kirbs } from "./akcije/kirbs";


// definicija wariablow
let dotkanje = 0

// soundy a hudzba
const mamaspew = WA.sound.loadSound('/src/hudzba/mamaspew.mp3')
const confighudzba = {
    volume: 0.2,
    loop: true,
    rate: 1.5,
    detune: 1,
    delay: 0,
    mute: false,
    seek: 0,
    }

    // setTimeoput(2000, () => {


    //mamaspew.play(confighudzba)
  
    // mužika hibać zo hudźba zaskoči
    // WA.player.moveTo (300,300,900)

// Waiting for the API to be ready
WA.onInit().then(() => {

teleport()
skocDoSwetaKilian()
popupNoweWokno ()
beamMiC ()
steveQuest()
hrow()
wobydlerjo()
kirbs()

// loggwac sto su koordinaty wot mužika
    WA.player.onPlayerMove((data)=>{
    const {x,y, oldX, oldY} = data
    // Alternativ const x = data.x
    // Alternativ const y = data.y

// import funkcije
    //const puc = wulicDistancu(oldX||0, oldY||0, x,y) 
    //console.warn(`${WA.player.name} distanca pohiba: ${puc}`)
    
    // aktualnu koordinatu
    console.warn(`${WA.player.name} moving to ${x}|${y}`)
    })

// wot jedneho mestna k tamnemu skocic
//WA.room.onEnterLayer('dzera').subscribe(()=>{
    //dotkanje = dotkanje + 1
    //if (dotkanje == 3) {mamaspew.play(confighudzba)
    //WA.chat.sendChatMessage('netko hraje so hudzba', 'Jurij')
    //WA.nav.goToRoom('MiC-Klick-pimper.tmj#cil')
    //WA.nav.goToRoom('MiC-Klick-pimper.tmj#moveTo=0,100')
//}})

// MiC-SprungKilian

WA.room.showLayer('kamjenje')

WA.room.onEnterLayer('MiC-stom').subscribe(() => {
    console.log('sym pri stomu.') 
    //WA.room.showLayer('bul')

})
WA.room.onEnterLayer('MiC-bul').subscribe(() => {
    console.log('sym pri bulu.')
})

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
