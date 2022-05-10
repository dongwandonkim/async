// 4311o th3r3 w0r1d
const salute = ['4311o', 'th3r3', 'w0r1d'];

const everySec = (counter) => {
  if (counter > salute.length - 1) return;

  console.log(salute[counter]);

  setTimeout(() => {
    everySec(counter + 1);
  }, 1000);
};

everySec(0);
