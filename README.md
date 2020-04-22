# GitPwnd
GitHub Password Brute Forcing Tool

GitPwnd is a password bruteforcing tool that I made as a project using Node JS and Puppeteer.

How It Works:

On launch you will be prompted to enter a username that you would like to brute force.

From there, the program takes over and will open a chrome window, the browser can be changed in the code by simply deleting the directory to chrome entirely or replacing it with the location of your installation. 

You can even make it so the browser doesnt even open by making headless true within the code.

The program will print each password that it tests and the program has a special way of telling you it has found the right one...it crashes.

Theres two potential outcomes when the program crashes, either GitHub has flagged the account/session because of excessive logon attempts (Very Likely) or it has come accross the right password (Would Be Awesome) in which it will then crash because it cannot find the password box anymore, though lucky for us it spews out the password that was being tested before the crash so now you'll know the username and password to that account.

This is merely an example of how a brute forcing program would work, it isnt perfect, especially in its password detection but give it a try and feel free to modify as needed, maybe you can improve on it?
