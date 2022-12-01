const Player = (name, level) => {
  let health = level * 2
  const getLevel = () => level
  const getName = () => name
  const die = () => {
    console.log(`${name} has died`)
  }
  const damage = (x) => {
    health -= x
    if (health <= 0) {
      die()
    }
  }
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1)
      console.log(`${enemy.getName()} has damaged ${name}`)
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1)
      console.log(`${name} has damaged ${enemy.getName()}`)
    }
  }
  return { attack, damage, die, getLevel, getName }
}

const joel = Player('Joel', 10)
const badGuy = Player('Bad Guy', 5)

joel.attack(badGuy)
console.log(joel.getLevel())
