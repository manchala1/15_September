const readline=require("readline")
function getNameFromReadLine(){
    var RL = readline.createInterface(process.stdin, process.stdout);
    RL.question('What is your name? ', (name)=>{
        console.log(name);
        RL.close();
    });
}
getNameFromReadLine()