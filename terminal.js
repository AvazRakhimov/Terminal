const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let theme = `~$ ` // theme || shell

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
            case '':
            console.log('Canceled.')
            question()
            break
            }
        })
        break
    /////

    // help command (not all commands written, fixes and updates coming soon...)
      case 'help':
        console.log(
          `'about': About project\n'bash' or 'zsh': Switch themes\n'help': Show commands\n'exit': Exit from app`
        )
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
          "Project 'Terminal' made for fun.\nThis app made possible by 'Avaz'."
        )
        question()
        break
    /////

    // theme || shell
      case 'zsh':
        // theme = "% "
        if (theme === "~$ ") {
          theme = "% "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Desktop$ ") {
          theme = "/Desktop% "
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
          console.log(`Desktop   Downloads   Documents   Pictures   Music   Videos`)
        } else if (theme === "% ") {
          console.log(`Desktop   Downloads   Documents   Pictures   Music   Videos`)
        } else if (theme === "~/Desktop$ ") {
          ;;
        } else if (theme === "/Desktop% ") {
          ;;
        }
        question()
        break
    /////

      // shell command (find out which shell || theme you're currently using)
      case 'shell':
        theme === '~$ ' ? console.log('bash') : null;
        theme === '% ' ? console.log('zsh') : null;
        theme === "~/Desktop$ " ? console.log('bash') : null;
        theme === "/Desktop% " ? console.log('zsh') : null;
        question()
        break

    // cd (change direction) command related // adding "folders" coming soon...
      case 'cd':
        theme === "~/Desktop$ " ? theme = '~$ ' : null
        theme === "/Desktop% " ? theme = '% ' : null
        question()
        break
      case 'cd ..':
        if (theme === "~/Desktop$ ") {
          theme = '~$ '
          console.log("You're in Home folder")
        } else if (theme === "/Desktop% ") {
          theme = '% '
          console.log("You're in Home folder")
        }
        question()
        break
      case 'cd Desktop':
        if (theme === "~$ ") {
          theme = "~/Desktop$ "
        } else if (theme === "% ") {
          theme = "/Desktop% "
        }
        question()
        break
      case 'cd Downloads':
        console.log("You're in Downloads folder")
        question()
        break
      case 'cd Documents':
        console.log("You're in Documents folder")
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
        }
        // console.log("Home")
        question()
        break
    /////

    // neofetch command (not completed, fixes coming soon...)
      case 'neofetch':
        console.log("\n   #####    ##          ##\n ##     ##   ##        ##\n ##     ##    ##      ##\n #########     ##    ##\n ##     ##      ##  ##\n ##     ##       ####\n")
        question()
        break

    /////

    // touch command (not working as aspected but I working on it, updates and fixes coming soon...)
      case 'touch':
        q = "Enter title of file: "
        rl.question(q, (file, title) => {
        switch (file, title) {
          case (file):
            if (title === '') {
              console.log("You didn't enter anything.")
            } else {
              console.log(`${file} file created.`)
            }
            question()
            break
          }
        })
        question()
        break
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
        }
        question()
        break
    /////
    }
  })
}

console.log('Welcome to Terminal!')
question()