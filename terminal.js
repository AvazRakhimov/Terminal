const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let theme = `~$ `

const question = () => {
  rl.question(theme, (text) => {
    switch (text) {
      case '':
        console.log("You didn't enter anything. Type 'exit' to close the app.")
        question()
        break
      case 'help':
        console.log(
          `'about': About project\n'bash' or 'zsh': Switch themes\n'help': Show commands\n'exit': Exit from app`
        )
        question()
        break
      case 'exit':
        console.log('Exiting...')
        rl.close()
        break
      case 'about':
        console.log(
          "Project 'Terminal' made for fun.\nThis app made possible by 'Avaz'."
        )
        question()
        break
      case 'zsh':
        theme = `% `
        question()
        break
      case 'bash':
        theme = `~$ `
        question()
        break
      case 'clear':
        console.clear()
        question()
        break
      default:
        console.log(`Code does nothing. '${text}'`)
        question()
    }
  })
}

console.log('Welcome to Terminal!')
question()
