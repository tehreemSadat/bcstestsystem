function dis_submit() {
    var att, disable;
    var oldpass = document.getElementById('opass');
    var newpass = document.getElementById('pass');
    var confirmnewpass = document.getElementById('cpass');
    if (!(oldpass.value == "")) {
        if (!(newpass.value == "") && !(confirmnewpass.value == "")) {
            if (newpass.value == confirmnewpass.value) {
                document.getElementById("submitz").removeAttribute("disabled");
                return true;
            }
            else {
                disable = document.getElementById('submitz');
                att = document.createAttribute('disabled');
                att.value = "disabled";
                disable.setAttributeNode(att);
                return false;
            }
        }
    }
    else {
        disable = document.getElementById('submitz');
        att = document.createAttribute('disabled');
        att.value = "disabled";
        disable.setAttributeNode(att);
        return false;
    }
}