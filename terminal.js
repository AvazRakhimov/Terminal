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

    // help command (v0.2)
      case 'help':
        console.log(`'about': About project\n'bash' & 'zsh': Switch shell\n'clear': Clear terminal\n'cd [dir]': Change directory\n'exit': Exit from app\n'help': Show commands\n'ls': List directories\n'neofetch': Display system information\n'shell': Show current shell\n'touch': Create a new file\n'whereami': Show current directory`)
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
      // zsh
      case 'zsh':
        if (theme === "~$ ") {
          theme = "% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Desktop$ ") {
          theme = "/Desktop% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Downloads$ ") {
          theme = "/Downloads% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Documents$ ") {
          theme = "/Documents% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Pictures$ ") {
          theme = "/Pictures% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Music$ ") {
          theme = "/Music% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Videos$ ") {
          theme = "/Videos% ";
          console.log('Shell changed: zsh')
        }
        question()
        break
       
      // bash
      case 'bash':
        if (theme === "% ") {
          theme = "~$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Desktop% ") {
          theme = "~/Desktop$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Downloads% ") {
          theme = "~/Downloads$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Documents% ") {
          theme = "~/Documents$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Pictures% ") {
          theme = "~/Pictures$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Music% ") {
          theme = "~/Music$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Videos% ") {
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

    // ls command
      case 'ls':
        theme === "~$ " ? console.log("Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === "% " ? console.log("Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === "~/Desktop$ " ?  null : null
        theme === "/Desktop% " ? null : null
        theme === "~/Downloads$ " ? null : null
        theme === "/Downloads% " ? null : null
        theme === "~/Documents$ " ? null : null
        theme === "/Documents% " ? null : null
        theme === "~/Pictures$ " ? null : null
        theme === "/Pictures% " ? null : null
        theme === "~/Music$ " ? null : null
        theme === "/Music% " ? null : null
        theme === "~/Videos$ " ? null : null
        theme === "/Videos% " ? null : null
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
        theme === "~/Pictures$ " ? console.log('bash') : null
        theme === "/Pictures% " ? console.log('zsh') : null
        theme === "~/Music$ " ? console.log('bash') : null
        theme === "/Music% " ? console.log('zsh') : null
        theme === "~/Videos$ " ? console.log('bash') : null
        theme === "/Videos% " ? console.log('zsh') : null
        question()
        break
    /////

    // cd (change direction) command related // adding "folders" coming soon...
      case 'cd':
        theme === "~/Desktop$ " ? theme = '~$ ' : null
        theme === "/Desktop% " ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "/Downloads% " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "/Documents% " ? theme = '% ' : null
        theme === "~/Pictures$ " ? theme = '~$ ' : null
        theme === "/Pictures% " ? theme = '% ' : null
        theme === "~/Music$ " ? theme = '~$ ' : null
        theme === "/Music% " ? theme = '% ' : null
        theme === "~/Videos$ " ? theme = '~$ ' : null
        theme === "/Videos% " ? theme = '% ' : null
        question()
        break

      case 'cd ..':
        theme === "~/Desktop$ " ? theme = '~$ ' : null
        theme === "/Desktop% " ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "/Downloads% " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "/Documents% " ? theme = '% ' : null
        theme === "~/Pictures$ " ? theme = '~$ ' : null
        theme === "/Pictures% " ? theme = '% ' : null
        theme === "~/Music$ " ? theme = '~$ ' : null
        theme === "/Music% " ? theme = '% ' : null
        theme === "~/Videos$ " ? theme = '~$ ' : null
        theme === "/Videos% " ? theme = '% ' : null
        question()
        break

    // cd [dir]
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

      case 'cd Pictures':
        theme === "~$ " ? theme = "~/Pictures$ " : null
        theme === "% " ? theme = "/Pictures% " : null
        question()
        break

      case 'cd Music':
        theme === "~$ " ? theme = "~/Music$ " : null
        theme === "% " ? theme = "/Music% " : null
        question()
        break

      case 'cd Videos':
        theme === "~$ " ? theme = "~/Videos$ " : null
        theme === "% " ? theme = "/Videos% " : null
        question()
        break
    /////

    // whereami command
      case 'whereami':
        theme === "~/Desktop$ " ? console.log('Desktop') : null
        theme === "/Desktop% " ? console.log('Desktop') : null
        theme === "~$ " ? console.log("Home") : null
        theme === "% " ? console.log("Home") : null
        theme === "~/Documents$ " ? console.log('Documents') : null
        theme === "/Documents% " ? console.log('Documents') : null
        theme === "~/Downloads$ " ? console.log('Downloads') : null
        theme === "/Downloads% " ? console.log('Downloads') : null
        theme === "~/Pictures$ " ? console.log('Pictures') : null
        theme === "/Pictures% " ? console.log('Pictures') : null
        theme === "~/Music$ " ? console.log('Pictures') : null
        theme === "/Music% " ? console.log('Pictures') : null
        theme === "~/Videos$ " ? console.log('Pictures') : null
        theme === "/Videos% " ? console.log('Pictures') : null
        question()
        break
    /////

    // touch command (not works as aspected, fixes and updates coming soon...)
      case 'touch':
        q = 'Enter file name: '
        rl.question(q, (title) => {
          switch (title) {
            case title:
            title === '' ? console.log('Canceled.') : console.log(`File ${title} created. Source: Trust me bro.`)
            question()
            break
          }
        })
        question()
        break
    /////

    // neofetch command (v0.3)
      case 'neofetch':
        console.log("\n   #####    ##          ##    #####     ########\n ##     ##   ##        ##   ##     ##        ##\n ##     ##    ##      ##    ##     ##       ##\n #########     ##    ##     #########     ##\n ##     ##      ##  ##      ##     ##    ##\n ##     ##       ####       ##     ##   ########\n")
        question()
        break
    /////

    // error (default) command
      default:
        theme === "~$ " ? console.log(`bash: command not found: ${text}`) : null
        theme === "% " ? console.log(`zsh: command not found: ${text}`) : null
        theme === "~/Desktop$ " ? console.log(`bash: command not found: ${text}`) : null
        theme === "/Desktop% " ? console.log(`zsh: command not found: ${text}`) : null
        theme === "~/Documents$ " ? console.log(`bash: command not found: ${text}`) : null
        theme === "/Documents% " ? console.log(`zsh: command not found: ${text}`) : null
        theme === "~/Downloads$ " ? console.log(`bash: command not found: ${text}`) : null
        theme === "/Downloads% " ? console.log(`zsh: command not found: ${text}`) : null
        theme === "~/Pictures$ " ? console.log(`bash: command not found: ${text}`) : null
        theme === "/Pictures% " ? console.log(`zsh: command not found: ${text}`) : null
        theme === "~/Music$ " ? console.log(`bash: command not found: ${text}`) : null
        theme === "/Music% " ? console.log(`zsh: command not found: ${text}`) : null
        theme === "~/Videos$ " ? console.log(`bash: command not found: ${text}`) : null
        theme === "/Videos% " ? console.log(`zsh: command not found: ${text}`) : null
        question()
        break
    /////
    }
  })
}

console.log("Disclamer! This is NOT a real terminal\nType 'help' to view available commands")
question()