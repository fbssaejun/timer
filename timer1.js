const arg = process.argv.slice(2);
//Filter only numbers from command line arguments
const filterNumber = arg.filter(el => !isNaN(el) &&  el > 0)

//Beeps every time according to the number user has input in commandline
const timer = (numbers) => {
numbers.forEach((time, index) => {
  setTimeout(() => {
    process.stdout.write('Beep!')
    //Generates new line after it finishes beeping
    if(index === numbers.length - 1) process.stdout.write('\n');
  }, 1000 * time)
})
}

timer(filterNumber)