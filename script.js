//your JS code here. If required.
function deletes(){
    let list = document.getElementById("colorSelect");
    let selectedOption = list.options[list.selectedIndex];
    list.removeChild(selectedOption);
}