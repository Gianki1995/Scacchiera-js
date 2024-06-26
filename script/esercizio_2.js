let scacchiera = document.getElementById('scacchiera');
let class1,class2;
let divContent = "";

for (let i = 0; i < 8; i++) {
    if(i%2 === 0){
        class1 = 'nero';
        class2 = 'bianco';
    } else{
        class1 = 'bianco';
        class2 = 'nero';
    }

    for (let j = 0; j < 8; j++) {
        if(j % 2 === 0){
      divContent += `<div class=${class1}></div>`;

    } else{
        divContent += `<div class=${class2}></div>`;
    }
}
}

scacchiera.innerHTML = divContent;