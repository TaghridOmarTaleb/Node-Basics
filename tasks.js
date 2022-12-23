const { addListener } = require("nodemon");

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  console.log(text.replace("\n" ,"") + "!".trim().split().join(''))
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.trim().startsWith('hello')){
    hello();
  }
  else if( text.trim().startsWith('help')){

  help();
}


  else if(text === 'list\n'){
    list();
  }

    
  else if(text.split(" ")[0]=== 'add'){
    add(text);
  }
  // else if(text === 'remove\n' || text === 'remove 1\n' || text === 'remove 2\n'){
  //   remove(text)
  // }
  else if(text.startsWith('remove') ){
    remove(text)
  }
  else if(text.split(" ")[0] === 'edit'){
    if( text ==='edit\n') 
     return console.log("error");
    edit(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+ c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  //console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

//this function lists all the possible commands
function help(text){

  //console.log( "quit/exit and hello"  )
}

//function list (lists all tasks)
var tasklist=["task_1" ,"task_2"]
function list(){
  tasklist.map((element,index) =>{
console.log(`${index +1} - []${element}`)
  })
}

function add(task){
  if(!task){
    console.error("errrrooor")
  }
 else{
  task=task.replace('\n','').trim()
  task=task.split("").slice(1).join(' ');
  tasklist.push(task)
 }
}
function edit(n){
  let task = n.trim().split(" ").slice(1);
  if(Number.isInteger(parseInt(task[0]))){
    tasklist[parseInt(task[0] -1 )] = task.slice(1).join(" ");
  } else {
    task = task.join(" ");
  tasklist[tasklist.length -1] = task;
  }
}

function remove(element){
  if(element === 'remove\n') {
    tasklist.pop()
    removable = parseInt(removable.split(" ").slice(1).join(' '));
       tasksList.splice(removable - 1,1);
       if(removable > tasksList.length) console.log("number does not exist")
  } else {
    element = element.replace('\n', '').trim()
    element = element.split(" ").slice(1).join(' ');
    tasklist.splice(parseInt(element) - 1,1)
    if(parseInt(element) > tasklist.length) console.log("not available number");
  }}


// The following line starts the application
startApp("Taghrid")
