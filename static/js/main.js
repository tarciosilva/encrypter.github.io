
var textToEncrypt = document.getElementById("text-to-encrypt");
textToEncrypt.value = "";
var textEncrypt = document.getElementById("text-encrypted");
textEncrypt.value = ""
var divRecDireito = document.getElementById("rec-direito");
textToEncrypt.selectionStart = 0;
textToEncrypt.selectionEnd = 0;

function main() {
    if (textToEncrypt.value == ""){
        alert('Texto vazio. Informe um texto para criptografar...!');
    }
    else{
        var selector = document.getElementById("select");
        var secretKey = keyGenerator(textToEncrypt.value);
        if(selector.value == "encrypt"){
            var textEncrypted = encrypt(textToEncrypt.value, secretKey, selector.value);
            textEncrypt.style.background = 'black';
            textEncrypt.value = textEncrypted;
            var textKey = document.getElementById("key-text");
            textKey.value = secretKey;
            openAlert("alert");
        }
        else if(selector.value == "decrypt"){
            var textToDecrypt = "";
            if ((textEncrypt.value == "") && (textToEncrypt == "")){
                alert('Texto vazio. Informe um texto para decriptografar...!');
            }
            else{
                if (textEncrypt.value) {
                    textToDecrypt = textEncrypt.value;
                }
                else {
                    textToDecrypt = textToEncrypt.value;
                }
            }
            var key = prompt("Informe a Chave de Criptografia: ");
            validator = keyValidator(key);
            if (validator) {
                var textDecrypted = encrypt(textToDecrypt, key, selector.value);
                textEncrypt.style.background = "black";
                textEncrypt.value = textDecrypted;
            }
            else {
                openAlert("alert-error");
            }

        }
    }
}

var startButton = document.getElementById("start-encrypt");
var copyButton = document.getElementById("copy");
var cleanerButton = document.getElementById("cleaner");
setSecreen();
startButton.onclick = main;
copyButton.onclick = copyTextEcrypt;
cleanerButton.onclick = cleanScreen;
