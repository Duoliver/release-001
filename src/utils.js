const generateTone = () => {
    return Math.floor(Math.random()*255)
}

const generateColour = () => {
    return [generateTone(), generateTone(), generateTone()]
}

const generateNumber = (min, max) => {
    return Math.floor(min + Math.random()*max)
}

export {generateColour, generateNumber}
