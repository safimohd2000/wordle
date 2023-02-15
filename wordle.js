
var currentword = '';
var targetword = 'FIGHT';
var rowcounter = 0;
var maxrowcounter = 6;
document.querySelectorAll('.keys').forEach(e => {
     e.id=e.innerText;
    // console.log(e.id  +""+ e.innerText )
    e.addEventListener('click', function () {
        
        //if it is a backspace key last letter needs to be deleted
        if (this.id == 'BSKP') {
            // need to check if there is anything in currentword

            if (currentword == '') {
                
                return
            }
            if (currentword.length > 0) {
                currentword = currentword.substring(0, currentword.length - 1)
                document.querySelectorAll('.items')[(5*rowcounter)+currentword.length].innerText = '';
                return
            }
        }
        if (this.id == 'ENTER') {
            if (currentword == targetword) {
                alert('CONGRATUATION YOU WON')
                return;
                
            }
            if (currentword.length < 5) {
                alert('PLEASE COMPLETE THE WORD')
                return
            }
            if (currentword.length == 5) {
                // need to check 
                for (var i = 0; i < currentword.length; i++) {
                    //use indexof to find the indexof current letter(currentword[i]) in the targetword.
                    // if the index is lessthan zero(the letter is not in the targetword) then grey
                    // if the index is equal to i then green else yellow

                    if (targetword.indexOf(currentword[i]) >= 0) {
                        if (targetword.indexOf(currentword[i]) == i) {
                            document.querySelectorAll(".items")[(5*rowcounter)+i].style.backgroundColor = "green"
                             document.getElementById(currentword[i]).style.backgroundColor="green"
                        }
                        else {
                            document.querySelectorAll(".items")[(5*rowcounter)+i].style.backgroundColor = "yellow"
                            document.getElementById(currentword[i]).style.backgroundColor="yellow"
                        }
                    }
                    else {
                        document.querySelectorAll(".items")[(5*rowcounter)+i].style.backgroundColor = "grey"
                        document.getElementById(currentword[i]).style.backgroundColor="grey"
                    }

                }
                currentword="";
                rowcounter++;
                if (rowcounter==maxrowcounter){
                    alert("You have reached your max limit")
                }
                return

            }

        }
        if (currentword.length <= 4 ) {
            document.querySelectorAll('.items')[(5*rowcounter)+currentword.length].innerText = e.innerText
            currentword = currentword + e.innerText;
            //  rowcounter++;
        }
    })

})









