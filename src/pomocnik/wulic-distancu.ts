// neue Funktion in andere Dateien exportieren
export const wulicDistancu = (
    xOld: number, 
    yOld: number, 
    x: number, 
    y: number) => {

        return Math.sqrt(Math.pow(xOld-x,2) + Math.pow(yOld-y,2))
}

// Math.pow(x,2) --- wotpoweduje funkciji x^2 Quadrat
// Math.pow(x, 1/3) ---- Dritte Wurzel
// Math.sqrt(x)  --- Wurzelfunktion

