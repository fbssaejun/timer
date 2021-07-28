process.stdin.on('data', key => {
  
  if (key === 'b') {
    process.stdout.write('Beep! \n');
  }

  if (key >= 1 && key <= 9) {
    process.stdout.write(`setting the timer for ${key} seconds..\n`);

    setTimeout(() => {
      process.stdout.write('Beep! \n');
    }, (key * 1000));
  }

  // \u0003 === ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
}); 