const textarea = document.getElementById("file-content");
const header = `TESTES RANDOMICOS - github: @marcelobasso\n.c\nCasos de teste - 2023-2\n.m\n65535\n.l\n.d\n.p\n0`;
let n_tests = 50;
var line;
let string = [];

textarea.textContent = header;
for (let i = 0; i < n_tests; i++) {
    let step = Math.floor(Math.random() * 25);
    let operation = Math.floor(Math.random() * 2) // 0/1;
    let word_size = Math.floor(Math.random() * 25); // 0-25 
    textarea.textContent += `\n.t\n.c\n` +
        `Teste ${i + 1}\n` +
        `.i\n` +
        `192=196\n` +
        `193=${196 + word_size + 2}\n` +
        `194=${step}\n` +
        `195=${operation}\n`;

    for (let j = 0; j < word_size; j++) {
        string[j] =  Math.floor(Math.random() * (90 - 65 + 1) + 65); // 65-90
        textarea.textContent += `${196 + j}=${string[j]}\n`;
    }

    // convert string
    string = string.map(char => {
        if (operation == 0) {
            char += step;
            char -= char > 90 ? 26 :0;
        } else {
            char -= step;
            char += char < 65 ? 26 :0; 
        }

        return char;
    });

    let end_second_string = 196 + word_size + 2;
    textarea.textContent += `${end_second_string - 1}=0\n` +
        `.o\n`;
    
    for (let k = 0; k < word_size; k++) {
        textarea.textContent += `${end_second_string + k}=${string[k]}\n`;
    }
    textarea.textContent += `${end_second_string + word_size}=0\n`;
}
