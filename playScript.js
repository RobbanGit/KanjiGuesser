

     function loadKanjis() {
         fetch("./kanjis/kanji.json").then(kanjiData => {
             return kanjiData.json();
         }).then(data => Object.keys(data).map((item, i) => {
             if (JSON.stringify(data[item].jlpt_new) === localStorage.getItem('JLPTLevel')){
                let combinedItem = Object.assign( {} , {"kanji": item},  data[item]);
               // alert(JSON.stringify(item));

                kanjiInfo.push(combinedItem);

            // alert(JSON.stringify(data[item])) //<-- Prints jlpt_new from kanji api!!!! :D
            //document.getElementById("kanjiDisplayer").innerText = item
             //alert(item)
         }}))

         /*
         fetch("./kanjis/kanji.json").then(kanjiData => {
             return kanjiData.json();
         }).then(data => alert(JSON.stringify(data)));
         */
    }

    /*
    let loadKanjis = () => {
        Object.keys(kanjis).map((item, i) => (
            <li key = {i}>
                <span>Key name : {item}</span>
            </li>

            document.getElementById("kanjiDisplayer").innerText = ;
        ))



        let kanjiObj = JSON.parse(kanjiPath);
        document.getElementById("kanjiDisplayer").innerText = kanjiObj;


    }*/
