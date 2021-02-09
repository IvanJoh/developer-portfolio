const classes = [
    "lazyCharacters",
    "movingCharacters",
    "hyperactiveCharacters"
]

const makealive = (string) => {
    var array = Array.from(string);
    var livestring = array.map(char => {
        var classIndex = Math.floor(Math.random() * classes.length);
        return(<span key={Math.random()} className={classes[classIndex]}>{char}</span>)
    })
    return livestring
}

module.exports = makealive