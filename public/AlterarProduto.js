boolFormAlterarVisivel = false;

let mostrarFormAlterar = function () {
    let formAlterarProduto = document.querySelector("#AlterarProduto");

    if (!boolFormAlterarVisivel)
        formAlterarProduto.style.display = "inline";
    else
        formAlterarProduto.style.display = "none";

    boolFormAlterarVisivel = !boolFormAlterarVisivel;
}

function ExibirFormAlterar() {
    var tr = this.parentNode.parentNode;

    var arrayTd = tr.children;

    document.querySelector("#altId").value = arrayTd[0].innerText;
    document.querySelector("#altCategoria").value = arrayTd[1].innerText;
    document.querySelector("#altNome").value = arrayTd[2].innerText;
    document.querySelector("#altPreco").value = arrayTd[3].innerText;

    if (!boolFormAlterarVisivel)
        mostrarFormAlterar();
}

function alterarProduto() {
    let Id = document.querySelector("#altId");
    let Categoria = document.querySelector("#altCategoria");
    let Nome = document.querySelector("#altNome");
    let Preco = document.querySelector("#altPreco");

    if (Categoria.value == "") {
        alert("Preencha o campo categoria!");
        Categoria.focus();
        return;
    }

    if (Nome.value == "") {
        alert("Preencha o campo Nome!");
        Nome.focus();
        return;
    }

    if (isNaN(Preco.value)) {
        alert("Preencha o campo Preco!");
        Preco.focus();
        return;
    }

    let request = new Object();
    request.Url = "/public/produtos/" + Id.value;
    request.Method = "PUT";
    request.Data = new Object();
    request.Data.id = Id.value;
    request.Data.categoria = Categoria.value;
    request.Data.nome = Nome.value;
    request.Data.preco = parseFloat(Preco.value);
    request.CallBack = function (jsonData) {
        let tr = document.querySelector("[cod='" + jsonData.Id + "']");
        var arrayTd = tr.children;
        arrayTd[1].innerHTML = jsonData.categoria;
        arrayTd[2].innerHTML = jsonData.nome;
        arrayTd[3].innerHTML = jsonData.preco;

        mostrarFormAlterar();
    };
    ComunicateServer(request);
}