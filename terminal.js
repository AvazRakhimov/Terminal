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

    // about command (v1)
      case 'about':
        console.log("Project \x1b[93mTerminal\x1b[0m made for fun.\nThis app made possible by \x1b[91mAvaz\x1b[0m")
        question()
        break
    /////

    // shell
      // zsh (v1)
      case 'zsh':
        if (theme === "~$ ") {
          theme = "% "
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        } else if (theme === `~/\x1b[94mDesktop\x1b[0m$ `) {
          theme = `\x1b[94mDesktop\x1b[0m % `
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        } else if (theme === "~/\x1b[94mDownloads\x1b[0m$ ") {
          theme = "\x1b[94mDownloads\x1b[0m % "
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        } else if (theme === "~/\x1b[94mDocuments\x1b[0m$ ") {
          theme = "\x1b[94mDocuments\x1b[0m % "
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        } else if (theme === "~/\x1b[94mPictures\x1b[0m$ ") {
          theme = "\x1b[94mPictures\x1b[0m % "
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        } else if (theme === "~/\x1b[94mMusic\x1b[0m$ ") {
          theme = "\x1b[94mMusic\x1b[0m % "
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        } else if (theme === "~/\x1b[94mVideos\x1b[0m$ ") {
          theme = "\x1b[94mVideos\x1b[0m % "
          console.log('Shell changed: \x1b[33mzsh\x1b[0m')
        }
        question()
        break
       
      // bash (v1)
      case 'bash':
        if (theme === "% ") {
          theme = "~$ ";
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
        } else if (theme === `\x1b[94mDesktop\x1b[0m % `) {
          theme = `~/\x1b[94mDesktop\x1b[0m$ `
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
        } else if (theme === "\x1b[94mDownloads\x1b[0m % ") {
          theme = "~/\x1b[94mDownloads\x1b[0m$ ";
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
        } else if (theme === "\x1b[94mDocuments\x1b[0m % ") {
          theme = "~/\x1b[94mDocuments\x1b[0m$ ";
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
        } else if (theme === "\x1b[94mPictures\x1b[0m % ") {
          theme = "~/\x1b[94mPictures\x1b[0m$ ";
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
        } else if (theme === "\x1b[94mMusic\x1b[0m % ") {
          theme = "~/\x1b[94mMusic\x1b[0m$ ";
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
        } else if (theme === "\x1b[94mVideos\x1b[0m % ") {
          theme = "~/\x1b[94mVideos\x1b[0m$ ";
          console.log('Shell changed: \x1b[33mbash\x1b[0m')
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

    // ls command (v1)
      case 'ls':
        theme === "~$ " ? console.log('\x1b[94m%s\x1b[0m', "Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === "% " ? console.log('\x1b[94m%s\x1b[0m', "Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ?  null : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? null : null
        theme === "~/\x1b[94mDownloads\x1b[0m$ " ? null : null
        theme === "\x1b[94mDownloads\x1b[0m % " ? null : null
        theme === "~/\x1b[94mDocuments\x1b[0m$ " ? null : null
        theme === "\x1b[94mDocuments\x1b[0m % " ? null : null
        theme === "~/\x1b[94mPictures\x1b[0m$ " ? null : null
        theme === "\x1b[94mPictures\x1b[0m % " ? null : null
        theme === "~/\x1b[94mMusic\x1b[0m$ " ? null : null
        theme === "\x1b[94mMusic\x1b[0m % " ? null : null
        theme === "~/\x1b[94mVideos\x1b[0m$ " ? null : null
        theme === "\x1b[94mVideos\x1b[0m % " ? null : null
        question()
        break
    /////

    // shell command (see which theme a.k.a shell is activated)
      case 'shell': // (v1)
        theme === '~$ ' ? console.log('bash') : null
        theme === '% ' ? console.log('zsh') : null
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? console.log('bash') : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? console.log('zsh') : null
        theme === "~/\x1b[94mDownloads\x1b[0m$ " ? console.log('bash') : null
        theme === "\x1b[94mDownloads\x1b[0m % " ? console.log('zsh') : null
        theme === "~/\x1b[94mDocuments\x1b[0m$ " ? console.log('bash') : null
        theme === "\x1b[94mDocuments\x1b[0m % " ? console.log('zsh') : null
        theme === "~/\x1b[94mPictures\x1b[0m$ " ? console.log('bash') : null
        theme === "\x1b[94mPictures\x1b[0m % " ? console.log('zsh') : null
        theme === "~/\x1b[94mMusic\x1b[0m$ " ? console.log('bash') : null
        theme === "\x1b[94mMusic\x1b[0m % " ? console.log('zsh') : null
        theme === "~/\x1b[94mVideos\x1b[0m$ " ? console.log('bash') : null
        theme === "\x1b[94mVideos\x1b[0m % " ? console.log('zsh') : null
        question()
        break
    /////

    // cd command (change direction)
      case 'cd':
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? theme = '~$ ' : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? theme = '% ' : null
        theme === "~/\x1b[94mDownloads\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mDownloads\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mDocuments\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mDocuments\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mPictures\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mPictures\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mMusic\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mMusic\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mVideos\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mVideos\x1b[0m % " ? theme = '% ' : null
        question()
        break

      case 'cd ..':
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? theme = '~$ ' : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? theme = '% ' : null
        theme === "~/\x1b[94mDownloads\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mDownloads\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mDocuments\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mDocuments\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mPictures\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mPictures\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mMusic\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mMusic\x1b[0m % " ? theme = '% ' : null
        theme === "~/\x1b[94mVideos\x1b[0m$ " ? theme = '~$ ' : null
        theme === "\x1b[94mVideos\x1b[0m % " ? theme = '% ' : null
        question()
        break

    // cd [dir] (v1)
      case 'cd Desktop':
        theme === "~$ " ? theme = `~/\x1b[94mDesktop\x1b[0m$ ` : null
        theme === "% " ? theme = `\x1b[94mDesktop\x1b[0m % ` : null
        question()
        break

      case 'cd Downloads':
        theme === "~$ " ? theme = "~/\x1b[94mDownloads\x1b[0m$ " : null
        theme === "% " ? theme = "\x1b[94mDownloads\x1b[0m % " : null
        question()
        break

      case 'cd Documents':
        theme === "~$ " ? theme = "~/\x1b[94mDocuments\x1b[0m$ " : null
        theme === "% " ? theme = "\x1b[94mDocuments\x1b[0m % " : null
        question()
        break

      case 'cd Pictures':
        theme === "~$ " ? theme = "~/\x1b[94mPictures\x1b[0m$ " : null
        theme === "% " ? theme = "\x1b[94mPictures\x1b[0m % " : null
        question()
        break

      case 'cd Music':
        theme === "~$ " ? theme = "~/\x1b[94mMusic\x1b[0m$ " : null
        theme === "% " ? theme = "\x1b[94mMusic\x1b[0m % " : null
        question()
        break

      case 'cd Videos':
        theme === "~$ " ? theme = "~/\x1b[94mVideos\x1b[0m$ " : null
        theme === "% " ? theme = "\x1b[94mVideos\x1b[0m % " : null
        question()
        break
    /////

    // whereami command (v1)
      case 'whereami':
        theme === `~/\x1b[94mDesktop\x1b[0m$ ` ? console.log('Desktop') : null
        theme === `\x1b[94mDesktop\x1b[0m % ` ? console.log('Desktop') : null
        theme === "~$ " ? console.log('\x1b[94mHome\x1b[0m') : null
        theme === "% " ? console.log('\x1b[94mHome\x1b[0m') : null
        theme === "~/\x1b[94mDocuments\x1b[0m$ " ? console.log('Documents') : null
        theme === "\x1b[94mDocuments\x1b[0m % " ? console.log('Documents') : null
        theme === "~/\x1b[94mDownloads\x1b[0m$ " ? console.log('Downloads') : null
        theme === "\x1b[94mDownloads\x1b[0m % " ? console.log('Downloads') : null
        theme === "~/\x1b[94mPictures\x1b[0m$ " ? console.log('Pictures') : null
        theme === "\x1b[94mPictures\x1b[0m % " ? console.log('Pictures') : null
        theme === "~/\x1b[94mMusic\x1b[0m$ " ? console.log('Pictures') : null
        theme === "\x1b[94mMusic\x1b[0m % " ? console.log('Pictures') : null
        theme === "~/\x1b[94mVideos\x1b[0m$ " ? console.log('Pictures') : null
        theme === "\x1b[94mVideos\x1b[0m % " ? console.log('Pictures') : null
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
        theme === "~/\x1b[94mDocuments\x1b[0m$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "\x1b[94mDocuments\x1b[0m % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/\x1b[94mDownloads\x1b[0m$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "\x1b[94mDownloads\x1b[0m % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/\x1b[94mPictures\x1b[0m$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "\x1b[94mPictures\x1b[0m % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/\x1b[94mMusic\x1b[0m$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "\x1b[94mMusic\x1b[0m % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/\x1b[94mVideos\x1b[0m$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "\x1b[94mVideos\x1b[0m % " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        question()
        break
    /////
    }
  })
}

console.clear()
console.log(`\x1b[91mDISCLAIMER: This is NOT a real terminal!\x1b[0m\nType \x1b[36mhelp\x1b[0m to view available commands`)
question()