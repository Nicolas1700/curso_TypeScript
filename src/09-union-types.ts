
(() => {
  let userId: string | number;
  userId = 132;
  userId = 'algo';

  function greeTing (myText: string | number) {
    // Los guardianes o type of
    if (typeof myText === 'string') {
      console.log(`Es un string ${myText.toLowerCase()}`);
    }else {
      console.log(`Es un number ${myText.toFixed(1)}`);
    }
  }

  greeTing('Hola');
  greeTing(12.35);


})();

