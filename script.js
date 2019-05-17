// var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
// let url ="https://www.receitaws.com.br/v1/cnpj/83325498000190"


// fetch(proxyUrl + url)
//     .then((res) => { 

//         return res.json()

//     })
//     .then((data) => {
//         console.log(data);
//     })

function pesquisar(){
    let input = document.getElementById("cnpj");
    let cnpj = input.value;

    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let receita ="https://www.receitaws.com.br/v1/cnpj/";
    let url = receita+cnpj;


    fetch(proxyUrl + url)
    .then((res) => { 

        return res.json()

    })
    .then((data) => {
        console.log(data);

        let jnome = data.nome;
        let jcnpj = data.cnpj;
        let jtelefone = data.telefone;
        let jemail = data.email;

        document.getElementById("nome").innerHTML = jnome;
        document.getElementById("cnpj").innerHTML = jcnpj;
        document.getElementById("telefone").innerHTML = jtelefone;
        document.getElementById("email").innerHTML = jemail;


    })

}