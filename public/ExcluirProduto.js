function excluir() {
    if (!confirm("Deseja realmente excluir?"))
        return;
    var tr = this.parentNode.parentNode;
    var id = tr.getAttribute("cod");
    let request = new Object();
    request.Url = "/public/produtos/" + id;
    request.Method = "DELETE";
    request.CallBack = function (jsonData) {
        let trExcluir = document.querySelector("[cod='" + jsonData.id + "']");
        trExcluir.remove();
    };
    ComunicateServer(request);
};