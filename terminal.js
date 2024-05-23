// import NodeJS module
const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let theme = `~$ ` // theme a.k.a shell

const question = () => {
  rl.question(theme, (text) => {
    switch (text) {
    // space (nothing) command
      case '':
        console.log("You didn't enter anything. Want to close the app?")
        q = "Enter 'y' or 'n': "
        rl.question(q, txt => {
          switch (txt) {
            case 'y':
            console.log('Exiting...')
            rl.close()
            break
            case 'n':
            console.log('Canceled.')
            question()
            break
            case txt:
            console.log('Canceled.')
            question()
            break
          }
        })
        question()
        break
    /////

    // help command (v0.1, "'touch [filename]': Create a new file\n" coming soon...)
      case 'help':
        console.log(`'about': About project\n'bash' & 'zsh': Switch shell\n'clear': Clear terminal\n'cd [dir]': Change directory\n'exit': Exit from app\n'help': Show commands\n'ls': List directories\n'neofetch': Display system information\n'shell': Show current shell\n'whereami': Show current directory`)
        question()
        break
    /////

    // exit command
      case 'exit':
        console.log('Exiting...')
        rl.close()
        break
    /////

    // about command
      case 'about':
        console.log(
          "Project Terminal made for fun.\nThis app made possible by Avaz."
        )
        question()
        break
    /////

    // shell
      case 'zsh':
        // theme = "% "
        if (theme === "~$ ") {
          theme = "% "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Desktop$ ") {
          theme = "/Desktop% "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Downloads$ ") {
          theme = "/Downloads% "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Documents$ ") {
          theme = "/Documents% "
          console.log('Shell changed: zsh')
        }
        question()
        break
      case 'bash':
        // theme = "~$ "
        if (theme === "% ") {
          theme = "~$ "
          console.log('Shell changed: bash')
        } else if (theme === "/Desktop% ") {
          theme = "~/Desktop$ "
          console.log('Shell changed: bash')
        } else if (theme === "/Downloads% ") {
          theme = "~/Downloads$ "
          console.log('Shell changed: bash')
        } else if (theme === "/Documents% ") {
          theme = "~/Documents$ "
          console.log('Shell changed: bash')
        }
        question()
        break
    /////

    // clear command
      case 'clear':
        console.clear()
        question()
        break
    /////

    // ls command
      case 'ls':
        if (theme === "~$ ") {
          console.log("Desktop   Downloads   Documents   Pictures   Music   Videos")
        } else if (theme === "% ") {
          console.log("Desktop   Downloads   Documents   Pictures   Music   Videos")
        } else if (theme === "~/Desktop$ ") {
          ;;
        } else if (theme === "/Desktop% ") {
          ;;
        } else if (theme === "~/Downloads$ ") {
          ;;
        } else if (theme === "/Downloads% ") {
          ;;
        } else if (theme === "~/Documents$ ") {
          ;;
        } else if (theme === "/Documents% ") {
          ;;
        }
        question()
        break
    /////

      // shell command (find out which theme || shell you're currently using)
      case 'shell':
        theme === '~$ ' ? console.log('bash') : null
        theme === '% ' ? console.log('zsh') : null
        theme === "~/Desktop$ " ? console.log('bash') : null
        theme === "/Desktop% " ? console.log('zsh') : null
        theme === "~/Downloads$ " ? console.log('bash') : null
        theme === "/Downloads% " ? console.log('zsh') : null
        theme === "~/Documents$ " ? console.log('bash') : null
        theme === "/Documents% " ? console.log('zsh') : null
        question()
        break

    // cd (change direction) command related // adding "folders" coming soon...
      case 'cd':
        theme === "~/Desktop$ " ? theme = '~$ ' : null
        theme === "/Desktop% " ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "/Downloads% " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "/Documents% " ? theme = '% ' : null
        question()
        break
      case 'cd ..':
        theme === "~/Desktop$ " ? theme = '~$ ' : null
        theme === "/Desktop% " ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "/Downloads% " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "/Documents% " ? theme = '% ' : null
        question()
        break

      // Completed
      case 'cd Desktop':
        theme === "~$ " ? theme = "~/Desktop$ " : null
        theme === "% " ? theme = "/Desktop% " : null
        question()
        break

      case 'cd Downloads':
        theme === "~$ " ? theme = "~/Downloads$ " : null
        theme === "% " ? theme = "/Downloads% " : null
        question()
        break

      case 'cd Documents':
        theme === "~$ " ? theme = "~/Documents$ " : null
        theme === "% " ? theme = "/Documents% " : null
        question()
        break

      // Not completed
      case 'cd Pictures':
        console.log("You're in Pictures folder\nSource: Trust me bro.")
        question()
        break
      case 'cd Music':
        console.log("You're in Music folder\nSource: Trust me bro.")
        question()
        break
      case 'cd Videos':
        console.log("You're in Videos folder\nSource: Trust me bro.")
        question()
        break
    /////

    // whereami command
      case 'whereami':
        if (theme === "~/Desktop$ ") {
          console.log('Desktop')
        } else if (theme === "/Desktop% ") {
          console.log('Desktop')
        } else if (theme === "~$ ") {
          console.log("Home")
        } else if (theme === "% ") {
          console.log("Home")
        } else if (theme === "~/Documents$ ") {
          console.log('Documents')
        } else if (theme === "/Documents% ") {
          console.log('Documents')
        } else if (theme === "~/Downloads$ ") {
          console.log('Downloads')
        } else if (theme === "/Downloads% ") {
          console.log('Downloads')
        }
        // console.log("Home")
        question()
        break
    /////

    // neofetch command (v0.1)
      case 'neofetch':
        console.log("\n   #####    ##          ##    #####     ########\n ##     ##   ##        ##   ##     ##        ##\n ##     ##    ##      ##    ##     ##       ##\n #########     ##    ##     #########     ##\n ##     ##      ##  ##      ##     ##    ##\n ##     ##       ####       ##     ##   ########\n")
        question()
        break
    /////

    // touch command (coming soon...)
    /////

    // error (default) command
      default:
        if (theme === "~$ ") {
          console.log(`bash: command not found: ${text}`)
        } else if (theme === "% ") {
          console.log(`zsh: command not found: ${text}`)
        } else if (theme === "~/Desktop$ ") {
          console.log(`bash: command not found: ${text}`)
        } else if (theme === "/Desktop% ") {
          console.log(`zsh: command not found: ${text}`)
        } else if (theme === "~/Documents$ ") {
          console.log(`bash: command not found: ${text}`)
        } else if (theme === "/Documents% ") {
          console.log(`zsh: command not found: ${text}`)
        } else if (theme === "~/Downloads$ ") {
          console.log(`bash: command not found: ${text}`)
        } else if (theme === "/Downloads% ") {
          console.log(`zsh: command not found: ${text}`)
        }
        question()
        break
    /////
    }
  })
}

console.log("Disclamer! This is NOT a real terminal\nType 'help' to view available commands")
question()