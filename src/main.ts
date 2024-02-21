/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Waiting for the API to be ready
WA.onInit().then(() => {

WA.room.showLayer('kamjenje')

WA.room.onEnterLayer('stom').subscribe(() => {
    console.log('sym pri stomu.') 
    //WA.room.showLayer('bul')

})
WA.room.onEnterLayer('bul').subscribe(() => {
    console.log('sym pri bulu.')
})

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
