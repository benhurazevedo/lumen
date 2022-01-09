function ComunicateServer(ObjRequest) {
    if (!XMLHttpRequest) {
        alert("O browser não suporta Ajax!");
        return;
    }
    let XmlhttprequestObj = new XMLHttpRequest();

    XmlhttprequestObj.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status >= 200 && this.status < 300) {
                ObjRequest.CallBack(JSON.parse(this.responseText));
            }
            else {
                alert("falha na recuperacao dos dados.");
            }
        }
    };

    XmlhttprequestObj.open(ObjRequest.Method, ObjRequest.Url, true);

    if (ObjRequest.Headers) {
        for (header in ObjRequest.Headers)
            XmlhttprequestObj.setRequestHeader(header, ObjRequest.Headers[header]);
    }

    if (ObjRequest.Data)
        XmlhttprequestObj.setRequestHeader("Content-Type", "application/json");

    if (ObjRequest.Data) {
        /*
        let urlEncodedData = "";
        let urlEncodedDataPairs = [];
        let name = "";

        
        for (name in ObjRequest.Data)
            urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(ObjRequest[name]));
        urlEncodedData = urlEncodedDataPairs.join(";");
        

        XmlhttprequestObj.send(urlEncodedData);
        */

        XmlhttprequestObj.send(JSON.stringify(ObjRequest.Data));
    }
    else {
        XmlhttprequestObj.send();
    }
}