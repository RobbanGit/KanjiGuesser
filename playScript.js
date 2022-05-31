 function loadKanjis() {
         fetch("./kanjis/kanji.json").then(kanjiData => {
             return kanjiData.json();
         }).then(data => Object.keys(data).map((item, i) => {
             //If the user selected all JLPT levels
             if (localStorage.getItem('JLPTLevel') === 'A'){
                 //Combine the kanji character and its associated data into one object.
                 let combinedItem = Object.assign( {} , {"kanji": item},  data[item]);
                 //Array containing the Kanji objects.
                 kanjiInfo.push(combinedItem);
             }
             //If the chosen JLPT level equals the JLPT level set in the Kanji JSON API.
             else if (JSON.stringify(data[item].jlpt_new) === localStorage.getItem('JLPTLevel')){
                 //Combine the kanji character and its associated data into one object.
                let combinedItem = Object.assign( {} , {"kanji": item},  data[item]);
                //Array containing the Kanji objects.
                kanjiInfo.push(combinedItem);
         }}))
    }