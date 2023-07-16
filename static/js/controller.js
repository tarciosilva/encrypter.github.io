function setSecreen(){
    if (textToEncrypt.value == ""){
        textEncrypt.style.background = 'none';
        textEncrypt.style.background = 'rgba(0, 0, 0, 0.8)';
        divRecDireito.style.background = "url('../../../images/picture.png')";
    }
}

function openAlert(alertTip) {
    if (alertTip == "alert"){
        document.getElementById("alert-content").style.display = "block";
        document.getElementById("alert-error").style.display = "none";
    }
    else if(alertTip == "alert-error"){
        document.getElementById("alert-content").style.display = "none";
        document.getElementById("alert-error").style.display = "block";
    }
    document.getElementById("alert").style.display = "block";
}

function closeModal() {
    document.getElementById("alert").style.display = "none";
}

function copyKey() {
    var copyText = document.getElementById("key-text");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Chave copiada com sucesso!");
    closeModal();
}

function copyTextEcrypt(){
    var textEncrypted = document.getElementById("text-encrypted");
    textEncrypted.select();
    textEncrypted.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado com Sucesso!");
}

function cleanScreen(){
    textToEncrypt.value = "";
    textEncrypt.value = "";
    setSecreen();
}



  



