function MontarLista() {
    let request = new Object();
    request.Url = "/public/produtos";
    request.Method = "GET";
    //request.Headers = { "Cache-Control": "no-cache" };
    request.CallBack = function (jsonData) {
        let tbody = document.createElement("tbody");
        for (let cont = 0; cont < jsonData.length; cont++) {
            let tr = document.createElement("tr");
            identificacaoProduto = document.createAttribute("cod");
            identificacaoProduto.value = jsonData[cont].id;
            tr.setAttributeNode(identificacaoProduto);
            let td = document.createElement("td");
            td.innerHTML = jsonData[cont].id;
            tr.append(td);
            td = document.createElement("td");
            td.innerHTML = jsonData[cont].categoria;
            tr.append(td);
            td = document.createElement("td");
            td.innerHTML = jsonData[cont].nome;
            tr.append(td);
            td = document.createElement("td");
            td.innerHTML = jsonData[cont].preco;
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
            //td.innerHTML = jsonData[cont].Preco;
            tr.append(td);
            tbody.append(tr);
        }
        let table = document.querySelector("table");
        table.append(tbody);
    }
    ComunicateServer(request);
}