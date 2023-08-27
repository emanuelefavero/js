// Bitwise Operators
// Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values

// * Bitwise AND, OR, XOR
// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 1 = 1
// 0 | 0 = 0
// 0 | 1 = 1
// 1 | 1 = 1
// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 1 = 0

// EXAMPLES
// 1 = 00000001
// 2 = 00000010
console.log(1 | 2) // Bitwise OR, outputs 3 since 00000011 is 3 in decimal
// ----------↓↓
// 3 = 00000011
// 4 = 00000100
console.log(3 & 4) // Bitwise AND, outputs 0 since 00000000 is 0 in decimal
// ----------↓↓
// 0 = 00000000
// 1 = 00000001
console.log(0 ^ 1) // Bitwise XOR, outputs 1 since 00000001 is 1 in decimal
// ----------↓↓
// 1 = 00000001

// * Left Shift, Right Shift
// Left Shift (<<) - Shifts the bits of the first operand left by the number of places specified in the second operand. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right

// Shift 1 to the left by 2 places
// 1 = 00000001
console.log(1 << 2) // Outputs 4 since 00000100 is 4 in decimal

// Right Shift (>>) - Shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name "sign-propagating"

// Shift 4 to the right by 2 places
// 4 = 00000100
console.log(4 >> 2) // Outputs 1 since 00000001 is 1 in decimal
