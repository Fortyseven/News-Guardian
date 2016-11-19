// Saves options to chrome.storage.sync.
function save_options() {
    var _highlightColor = document.getElementById('highlightColor').value;
    var _enabledFacebook = document.getElementById('enabledFacebook').checked;
    var _enabledGoogle = document.getElementById('enabledGoogle').checked;
    var _enabledReddit = document.getElementById('enabledReddit').checked;

    chrome.storage.sync.set({        
        highlightColor: _highlightColor,
        enabledFacebook: _enabledFacebook,
        enabledGoogle: _enabledGoogle,
        enabledReddit: _enabledReddit,
    }, function() {
        // // Update status to let user know options were saved.
        // var status = document.getElementById('status');
        // status.textContent = 'Options saved.';
        // setTimeout(function() { status.textContent = ''; }, 750);
        console.info("Saved.", _highlightColor);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        highlightColor: "#ffffa0",
        enabledFacebook: true,
        enabledGoogle: true,
        enabledReddit: true,
    }, function(items) {        
        document.getElementById('highlightColor').value = items.highlightColor;
        document.getElementById('enabledFacebook').checked = items.enabledFacebook;
        document.getElementById('enabledGoogle').checked = items.enabledGoogle;
        document.getElementById('enabledReddit').checked = items.enabledReddit;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
//document.getElementById('save').addEventListener('click', save_options);

var inputs = document.getElementsByTagName("input");
for(var i in inputs) {
    if (inputs[i].addEventListener)
        //inputs[i].addEventListener('onchange', save_options);
        inputs[i].onchange = save_options;
} 