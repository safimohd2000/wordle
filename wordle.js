var wordarray = ["LIGHT", "SOUND", "FIGHT", "WRONG", "SLIME",
    "CHANGE", "COMMIT", "WORDLE", "SHUTTER", "SUPERB", "LETTER", "COMPETE"]
var currentword = '';
var newWordSize = 25;
var targetword = "";
var supportedWordSize = 5;
rowaddition(25);
var rowcounter = 0;
var maxrowcounter = 6;
document.querySelectorAll('.keys').forEach(e => {
    e.id = e.innerText;
    e.addEventListener('click', function () {

        //if it is a backspace key last letter needs to be deleted
        if (this.id == 'BSKP') {
            // need to check if there is anything in currentword

            if (currentword == '') {

                return
            }
            if (currentword.length > 0) {
                currentword = currentword.substring(0, currentword.length - 1)
                document.querySelectorAll('.items')[(supportedWordSize * rowcounter) + currentword.length].innerText = '';
                return
            }
        }
        if (this.id == 'ENTER') {
            if (currentword.length < supportedWordSize) {
                alert('PLEASE COMPLETE THE WORD')
                return
            }
            if (currentword.length == supportedWordSize) {
                // need to check 
                for (var i = 0; i < currentword.length; i++) {
                    //use indexof to find the indexof current letter(currentword[i]) in the targetword.
                    // if the index is lessthan zero(the letter is not in the targetword) then grey
                    // if the index is equal to i then green else yellow

                    if (targetword.indexOf(currentword[i]) >= 0) {
                        if (targetword.indexOf(currentword[i]) == i) {
                            document.querySelectorAll(".items")[(supportedWordSize * rowcounter) + i].style.backgroundColor = "green"
                            document.getElementById(currentword[i]).style.backgroundColor = "green"
                        }
                        else {
                            document.querySelectorAll(".items")[(supportedWordSize * rowcounter) + i].style.backgroundColor = "yellow"
                            document.getElementById(currentword[i]).style.backgroundColor = "yellow"
                        }
                    }
                    else {
                        document.querySelectorAll(".items")[(supportedWordSize * rowcounter) + i].style.backgroundColor = "grey"
                        document.getElementById(currentword[i]).style.backgroundColor = "grey"
                    }

                }
                if (currentword == targetword) {
                    alert('CONGRATUATION YOU WON')
                    return;


                }
                currentword = "";
                rowcounter++;
                if (rowcounter == maxrowcounter) {
                    alert("You have reached your max limit")
                }
                return

            }

        }

        if (currentword.length < supportedWordSize) {

            document.querySelectorAll('.items')[(supportedWordSize * rowcounter) + currentword.length].innerText = e.innerText
            currentword = currentword + e.innerText;
            //  rowcounter++;
        }
    })

})

function rowaddition(newWordSize) {
    currentword = '';
    rowcounter = 0;
    document.querySelectorAll('.keys').forEach(e => {
        e.style.backgroundColor = "darkgrey";
    })
    console.log(supportedWordSize);
    var newwordarray = wordarray.filter(w => w.length == supportedWordSize)
    targetword = newwordarray[Math.floor(newwordarray.length * (Math.random(1)))]
    document.getElementById("gamediv").innerHTML = "";
    for (let i = 0; i < newWordSize; i++) {
        var newcol = document.createElement('div');

        newcol.className = "items";
        if (supportedWordSize == 5) {
            var diw = document.getElementById('gamediv');
            diw.className = "gamecontainer"
            // diw.style.width=340(px);
            // console.log (diw.width)
            diw.appendChild(newcol);

        }
        if (supportedWordSize == 6) {
            console.log(supportedWordSize);
            var diw = document.getElementById('gamediv');
            diw.className = "gamecontainer1"
            // diw.style.width=340(px);
            // console.log (diw.width)
            diw.appendChild(newcol);

        }
        if (supportedWordSize == 7) {
            var diw = document.getElementById('gamediv');
            diw.className = "gamecontainer2"
            // diw.style.width=340(px);
            // console.log (diw.width)
            diw.appendChild(newcol);


        }




    }

    var checked= document.getElementById('darkMode')
    
     switchTheme(checked.checked);

}
function switchTheme(isDarkMode) {
    if (isDarkMode) {
        document.querySelectorAll('body')[0].style.backgroundColor = "black";
        document.querySelectorAll('body')[0].style.color = "white";
        document.querySelectorAll('.items').forEach(el => {
            el.style.borderColor = "white";

        });
        // document.querySelectorAll("dialog").style.backDrop.backgroundColor=rgba(255, 0, 0, 0.25)



    }
    else {
        document.querySelectorAll('body')[0].style.backgroundColor = "white";
        document.querySelectorAll('body')[0].style.color = "black";
        document.querySelectorAll('.items').forEach(el => {
            el.style.borderColor = "black";
        });
    }

}
function openSettingsDialog() {
    document.getElementById('settingsDialog').showModal();
}
function closeSettingsDialog() {
    document.getElementById('settingsDialog').close();
}







