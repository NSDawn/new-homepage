export function formatShortDate(d: Date, locale = "en"): string {
    switch (locale) {
        case "ja": 
            const year = `${formatFullWidthNumber(d.getFullYear())}年`
            const month = `${formatFullWidthNumber(d.getMonth() + 1)}`
            const day = `${formatFullWidthNumber(d.getDate())}`
            return `${year} ${month} ${day}`
        case "fr":
            return `${d.getDate()} ${FR_MONTHS[d.getMonth()]} ${d.getFullYear()}`
        case "es":
            return `${d.getDate()} ${ES_MONTHS[d.getMonth()]} ${d.getFullYear()}`
        case "en":
        default:
            return `${d.getDate()} ${EN_MONTHS[d.getMonth()]} ${d.getFullYear()}`
    }
}
const EN_MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
const FR_MONTHS = [
    "janv", "févr", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"
]
const ES_MONTHS = [
    "ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"
]
const FW_NUMERALS = [
    "０", "１", "２", "３", "４", "５", "６", "７", "８", "９"
]
function formatFullWidthNumber(_n: number): string {
    const n = Math.floor(_n).toString();
    let out = "";
    for (let digit of n) {
        out += FW_NUMERALS[parseInt(digit)]
    }
    return out;
}