window.$ = window.jquery
window.jQuery = function(nodes){
    if(typeof (nodes) === 'string'){
        nodes = document.querySelectorAll(nodes);
    }
    return nodes
}

window.jQuery.ajax = function(url,method,body,success,fail){
    return new Promise(function (resolve,reject){
        let request = new XMLHttpRequest();
        request.open(method,url);
        request.onreadystatechange = () =>{
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined, request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body);
    })
}
