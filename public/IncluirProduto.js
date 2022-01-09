boolFormIncluirVisivel = false;

let mostrarFormIncluir = function () {
    let btnMostrarFormInc = document.querySelector("#btnMostrarFormIncluir");
    let formIncluirProduto = document.querySelector("#IncluirProduto");

    if (!boolFormIncluirVisivel) {
        btnMostrarFormInc.style.display = "none";
        formIncluirProduto.style.display = "inline";
    }
    else {
        btnMostrarFormInc.style.display = "inline";
        formIncluirProduto.style.display = "none";
    }
    boolFormIncluirVisivel = !boolFormIncluirVisivel;
}

function IncluirProduto() {
    var Categoria, Nome, Preco;
    Categoria = document.querySelector("#incCategoria");
    Nome = document.querySelector("#incNome");
    Preco = document.querySelector("#incPreco");

    if (Categoria.value == "") {
        alert("A categoria não foi informada.");
        Categoria.focus();
        return;
    }
    if (Nome.value == "") {
        alert("O nome não foi informado.");
        Nome.focus();
        return;
    }
    if (Preco.value == "") {
        alert("O preco não foi informado.");
        Preco.focus();
        return;
    }
    if (isNaN(Preco.value)) {
        alert("O preco não foi informado.");
        Preco.focus();
        return;
    }

    let request = new Object();
    request.Url = "/public/produtos";
    request.Method = "POST";
    request.Data = new Object();
    request.Data.categoria = Categoria.value;
    request.Data.nome = Nome.value;
    request.Data.preco = parseFloat(Preco.value);
    request.Headers = new Object();
    request.CallBack = function (jsonData) {
        let tbody = document.querySelector("tbody");
        let tr = document.createElement("tr");
        identificacaoProduto = document.createAttribute("cod");
        identificacaoProduto.value = jsonData.id;
        tr.setAttributeNode(identificacaoProduto);
        let td = document.createElement("td");
        td.innerHTML = jsonData.id;
        tr.append(td);
        td = document.createElement("td");
        td.innerHTML = jsonData.categoria;
        tr.append(td);
        td = document.createElement("td");
        td.innerHTML = jsonData.nome;
        tr.append(td);
        td = document.createElement("td");
        td.innerHTML = jsonData.preco;
        tr.append(td);

        td = document.createElement("td");

        btnAlterar = document.createElement("button");
        btnAlterar.innerHTML = "Alterar";
        btnAlterar.onclick = ExibirFormAlterar;
        td.append(btnAlterar);

        btnExcluir = document.createElement("button");
        btnExcluir.innerHTML = "Excluir";
        btnExcluir.onclick = excluir;
        td.append(btnExcluir);

        tr.append(td);
        tbody.append(tr);

        Categoria.value = "";
        Nome.value = "";
        Preco.value = "";

        mostrarFormIncluir();
    };
    ComunicateServer(request);
}