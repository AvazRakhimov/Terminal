// import Node.js module
const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let theme = `~$ ` // default bash theme a.k.a shell

const question = () => {
  rl.question(theme, (text) => {
    switch (text) {
    // empty (nothing) command (v1.1)
      case '':
        console.log("You didn't enter anything. Want to close the app?")
        q = `Enter \x1b[31myes\x1b[0m or \x1b[32mno\x1b[0m: `
        rl.question(q, txt => {
          switch (txt) {
            case 'yes':
              rl.close()
              break
            case 'no':
              console.log('\x1b[37m%s\x1b[0m', 'Canceled.')
              question()
              break
            case txt:
              console.log('\x1b[37m%s\x1b[0m', 'Canceled.')
              question()
              break
          }
        })
        question()
        break
    /////

    // help command (v1.1)
      case 'help':
        console.log(`\x1b[96mabout\x1b[0m: About project\n\x1b[96mbash\x1b[0m or \x1b[96mzsh\x1b[0m: Switch shell\n\x1b[96mclear\x1b[0m: Clear terminal\n\x1b[96mcd [dir]\x1b[0m: Change directory\n\x1b[96mexit\x1b[0m: Exit from app\n\x1b[96mhelp\x1b[0m: Show commands\n\x1b[96mls\x1b[0m: List directories\n\x1b[96mneofetch\x1b[0m: Display system information\n\x1b[96mshell\x1b[0m: Show current shell\n\x1b[96mtouch\x1b[0m: Create a new file\n\x1b[96mwhereami\x1b[0m: Show current directory`)
        question()
        break
    /////

    // exit command
      case 'exit':
        rl.close()
        break
    /////

    // about command (v0.1)
      case 'about':
        console.log("Project \x1b[93mTerminal\x1b[0m made for fun.\nThis app made possible by \x1b[91mAvaz\x1b[0m")
        question()
        break
    /////

    // shell
      // zsh (v0.2)
      case 'zsh':
        if (theme === "~$ ") {
          theme = "% "
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        } else if (theme === `~/\x1b[94mDesktop\x1b[0m$ `) {
          theme = `\x1b[94mDesktop\x1b[0m % `
          console.log('Shell changed: zsh')
        } else if (theme === "~/Downloads$ ") {
          theme = "Downloads % "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Documents$ ") {
          theme = "Documents % "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Pictures$ ") {
          theme = "Pictures % "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Music$ ") {
          theme = "Music % "
          console.log('Shell changed: zsh')
        } else if (theme === "~/Videos$ ") {
          theme = "Videos % "
          console.log('Shell changed: zsh')
        }
        question()
        break
       
      // bash (v0.2)
      case 'bash':
        if (theme === "% ") {
          theme = "~$ ";
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
        } else if (theme === `\x1b[94mDesktop\x1b[0m % `) {
          theme = `~/\x1b[94mDesktop\x1b[0m$ `
          console.log('Shell changed: bash')
        } else if (theme === "Downloads % ") {
          theme = "~/Downloads$ ";
          console.log('Shell changed: bash')
        } else if (theme === "Documents % ") {
          theme = "~/Documents$ ";
          console.log('Shell changed: bash')
        } else if (theme === "Pictures % ") {
          theme = "~/Pictures$ ";
          console.log('Shell changed: bash')
        } else if (theme === "Music % ") {
          theme = "~/Music$ ";
          console.log('Shell changed: bash')
        } else if (theme === "Videos % ") {
          theme = "~/Videos$ ";
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

    // ls command (v0.3)
      case 'ls':
        theme === "~$ " ? console.log('\x1b[94m%s\x1b[0m', "Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === "% " ? console.log('\x1b[94m%s\x1b[0m', "Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ?  null : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? null : null
        theme === "~/Downloads$ " ? null : null
        theme === "Downloads % " ? null : null
        theme === "~/Documents$ " ? null : null
        theme === "Documents % " ? null : null
        theme === "~/Pictures$ " ? null : null
        theme === "Pictures % " ? null : null
        theme === "~/Music$ " ? null : null
        theme === "Music % " ? null : null
        theme === "~/Videos$ " ? null : null
        theme === "Videos % " ? null : null
        question()
        break
    /////

    // shell command (see which theme a.k.a shell is activated)
      case 'shell': // (v0.3)
        theme === '~$ ' ? console.log('bash') : null
        theme === '% ' ? console.log('zsh') : null
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? console.log('bash') : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? console.log('zsh') : null
        theme === "~/Downloads$ " ? console.log('bash') : null
        theme === "Downloads % " ? console.log('zsh') : null
        theme === "~/Documents$ " ? console.log('bash') : null
        theme === "Documents % " ? console.log('zsh') : null
        theme === "~/Pictures$ " ? console.log('bash') : null
        theme === "Pictures % " ? console.log('zsh') : null
        theme === "~/Music$ " ? console.log('bash') : null
        theme === "Music % " ? console.log('zsh') : null
        theme === "~/Videos$ " ? console.log('bash') : null
        theme === "Videos % " ? console.log('zsh') : null
        question()
        break
    /////

    // cd command (change direction)
      case 'cd':
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? theme = '~$ ' : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "Downloads % " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "Documents % " ? theme = '% ' : null
        theme === "~/Pictures$ " ? theme = '~$ ' : null
        theme === "Pictures % " ? theme = '% ' : null
        theme === "~/Music$ " ? theme = '~$ ' : null
        theme === "Music % " ? theme = '% ' : null
        theme === "~/Videos$ " ? theme = '~$ ' : null
        theme === "Videos % " ? theme = '% ' : null
        question()
        break

      case 'cd ..':
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? theme = '~$ ' : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "Downloads % " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "Documents % " ? theme = '% ' : null
        theme === "~/Pictures$ " ? theme = '~$ ' : null
        theme === "Pictures % " ? theme = '% ' : null
        theme === "~/Music$ " ? theme = '~$ ' : null
        theme === "Music % " ? theme = '% ' : null
        theme === "~/Videos$ " ? theme = '~$ ' : null
        theme === "Videos % " ? theme = '% ' : null
        question()
        break

    // cd [dir] (v0.3)
      case 'cd Desktop':
        theme === "~$ " ? theme = `~/\x1b[94mDesktop\x1b[0m$ ` : null
        theme === "% " ? theme = `\x1b[94mDesktop\x1b[0m % ` : null
        question()
        break

      case 'cd Downloads':
        theme === "~$ " ? theme = "~/Downloads$ " : null
        theme === "% " ? theme = "Downloads % " : null
        question()
        break

      case 'cd Documents':
        theme === "~$ " ? theme = "~/Documents$ " : null
        theme === "% " ? theme = "Documents % " : null
        question()
        break

      case 'cd Pictures':
        theme === "~$ " ? theme = "~/Pictures$ " : null
        theme === "% " ? theme = "Pictures % " : null
        question()
        break

      case 'cd Music':
        theme === "~$ " ? theme = "~/Music$ " : null
        theme === "% " ? theme = "Music % " : null
        question()
        break

      case 'cd Videos':
        theme === "~$ " ? theme = "~/Videos$ " : null
        theme === "% " ? theme = "Videos % " : null
        question()
        break
    /////

    // whereami command (v0.3)
      case 'whereami':
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? console.log('\x1b[94m%s\x1b[0m', 'Desktop') : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? console.log('\x1b[94m%s\x1b[0m', 'Desktop') : null
        theme === "~$ " ? console.log('\x1b[94m%s\x1b[0m', "Home") : null
        theme === "% " ? console.log('\x1b[94m%s\x1b[0m', "Home") : null
        theme === "~/Documents$ " ? console.log('\x1b[94m%s\x1b[0m', 'Documents') : null
        theme === "Documents % " ? console.log('\x1b[94m%s\x1b[0m', 'Documents') : null
        theme === "~/Downloads$ " ? console.log('\x1b[94m%s\x1b[0m', 'Downloads') : null
        theme === "Downloads % " ? console.log('\x1b[94m%s\x1b[0m', 'Downloads') : null
        theme === "~/Pictures$ " ? console.log('\x1b[94m%s\x1b[0m', 'Pictures') : null
        theme === "Pictures % " ? console.log('\x1b[94m%s\x1b[0m', 'Pictures') : null
        theme === "~/Music$ " ? console.log('\x1b[94m%s\x1b[0m', 'Pictures') : null
        theme === "Music % " ? console.log('\x1b[94m%s\x1b[0m', 'Pictures') : null
        theme === "~/Videos$ " ? console.log('\x1b[94m%s\x1b[0m', 'Pictures') : null
        theme === "Videos % " ? console.log('\x1b[94m%s\x1b[0m', 'Pictures') : null
        question()
        break
    /////

    // touch command (v0.3-alpha, updates coming soon...)
      case 'touch':
        q = 'Enter file name: '
        rl.question(q, (title) => {
          switch (title) {
            case title:
            title === '' ? console.log('Canceled.') : console.log(`File \x1b[97m${title}\x1b[0m created.\nSource: \x1b[95mTrust me bro.\x1b[0m`)
            question()
            break
          }
        })
        question()
        break
    /////

    // neofetch command (v1)
      case 'neofetch':
        console.clear()
        console.log("\n   #####    ##          ##    #####     ########\n ##     ##   ##        ##   ##     ##        ##\n ##     ##    ##      ##    ##     ##       ##\n #########     ##    ##     #########     ##\n ##     ##      ##  ##      ##     ##    ##\n ##     ##       ####       ##     ##   ########\n")
        question()
        break
    /////

    // error handler (not command)
      default:
        theme === "~$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Documents$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "Documents % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Downloads$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "Downloads % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Pictures$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "Pictures % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Music$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "Music % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Videos$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "Videos % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        question()
        break
    /////
    }
  })
}

console.clear()
console.log(`\x1b[91mDISCLAIMER: This is NOT a real terminal!\x1b[0m\nType \x1b[36mhelp\x1b[0m to view available commands`)
question()