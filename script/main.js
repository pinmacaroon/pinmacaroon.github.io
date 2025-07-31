function mulberry32(a) {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function r(seed, min, max){
    return Math.round(mulberry32(seed) * (max - min) + min);
}

const SHITPOSTS = [
    ""
]

