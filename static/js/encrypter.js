
function keyGenerator(textEncrypt) {
    var keyVector = [];
    textLentgh = textEncrypt.length;
  
    for (let k = 0; k <= 29; k++) {
      keyVector.push(Math.floor(Math.random() * (100 - 34 + 1)) + 34);
    }
  
 
    keyVector = String.fromCharCode(...keyVector)
    return keyVector;
  }

function keyValidator(key){
  var validator = true;
  if (key.length != 30){
    validator = false;
  }
  return validator;
}

function vectorGen(word) {
    var vecText = [];
    for (let k = 0; k < word.length; k++) {
      vecText.push(word.charCodeAt(k));
    }
    return vecText;
}

function encrypt(textEncrypt, keyPass, fun) {
    let counter = 0;
    let newText = [];
    let textToEncrypt = vectorGen(textEncrypt);
    let key = vectorGen(keyPass);
    let textLength = textEncrypt.length;
    let keyLength = key.length;
    if (fun == 'encrypt') {
      if ((textLength % keyLength == 0) || (keyLength > textLength)) {
        if (keyLength > textLength){
          for (let k = 0; k < textLength; k++) {
            newText.push(textToEncrypt[k] + key[k]);
          }
        }
        else {
          counter = 0;
          let length = 0;
          length = Math.floor(textLength / keyLength);
          let controller = 0;
          while (counter < length) {
            for (let k = 0; k < textLength; k++) {
              newText.push(textToEncrypt[controller] + key[k]);
              controller++;
            }
            counter++;
          }
        }

      }
      else {
        counter = 0;
        let length = 0;
        length = Math.floor(textLength / keyLength);
        let controller = 0;
        while (counter < length) {
          for (let k = 0; k < keyLength; k++) {
            newText.push(textToEncrypt[controller] + key[k]);
            controller++;
          }
          counter++;
        }
        length = textLength % keyLength;
        let dif = textToEncrypt.slice(-length);
        for (let k = 0; k < dif.length; k++) {
          newText.push(dif[k] + key[k]);
        }
      }

    }
    else if (fun == 'decrypt'){
      if ((textLength % keyLength == 0) || (keyLength > textLength)) {
        if (keyLength > textLength){
          for (let k = 0; k < textLength; k++) {
            newText.push(textToEncrypt[k] - key[k]);
          }
        }
        else {
          counter = 0;
          let length = 0;
          length = Math.floor(textLength / keyLength);
          let controller = 0;
          while (counter < length) {
            for (let k = 0; k < textLength; k++) {
              newText.push(textToEncrypt[controller] - key[k]);
              controller++;
            }
            counter++;
          }
        }

      }
      else {
        counter = 0;
        let length = 0;
        length = Math.floor(textLength / keyLength);
        let controller = 0;
        while (counter < length) {
          for (let k = 0; k < keyLength; k++) {
            newText.push(textToEncrypt[controller] - key[k]);
            controller++;
          }
          counter++;
        }
        length = textLength % keyLength;
        let dif = textToEncrypt.slice(-length);
        for (let k = 0; k < dif.length; k++) {
          newText.push(dif[k] - key[k]);
        }
      }

    }
    newText = String.fromCharCode(...newText);
    return newText;
  }
