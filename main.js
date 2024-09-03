const form = document.getElementById("iform");
const names = [];
const numbers = [];
let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputName = document.getElementById("iname");
    const inputNumber = parseInt(document.getElementById('inumber').value, 10);

    if (names.includes(inputName.value)){
        alert(`O nome: ${inputName.value} já foi cadastrado`)
    
    }else if (numbers.includes(inputNumber)){
        alert(`O número: ${inputNumber} já foi cadastrado`)
    }
    
    else{
        names.push(inputName.value);
        numbers.push(inputNumber)

        let linha = `<tr>`;
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputNumber}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    
    inputName.value = "";
    document.getElementById('inumber').value = "";
}

function atualizaTabela() {
    const bodyTabela = document.querySelector("tbody");
    bodyTabela.innerHTML = linhas;
}