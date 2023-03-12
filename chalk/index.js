import chalk from 'chalk'

console.log(chalk.magenta.bold('Hello'))
console.log(chalk.hex('#8072cd').italic('World'))

// MODIFIERS
// reset - Reset the current style.
// bold - Make the text bold.
// dim - Make the text have lower opacity.
// italic - Make the text italic. (Not widely supported)
// underline - Put a horizontal line below the text. (Not widely supported)
// overline - Put a horizontal line above the text. (Not widely supported)
// inverse- Invert background and foreground colors.
// hidden - Print the text but make it invisible.
// strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
// visible- Print the text only when Chalk has a color level above zero. Can be useful for things that are purely cosmetic.

// COLORS
// black
// red
// green
// yellow
// blue
// magenta
// cyan
// white
// blackBright (alias: gray, grey)
// redBright
// greenBright
// yellowBright
// blueBright
// magentaBright
// cyanBright
// whiteBright

// BACKGROUND COLORS
// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite
// bgBlackBright (alias: bgGray, bgGrey)
// bgRedBright
// bgGreenBright
// bgYellowBright
// bgBlueBright
// bgMagentaBright
// bgCyanBright
// bgWhiteBright

// EXTENDED COLORS
// hex - Accepts a hex color value and converts it to the closest supported color.
