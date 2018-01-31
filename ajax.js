window.$ = window.jquery
window.jQuery = function(nodes){
    if(typeof (nodes) === 'string'){
        nodes = document.querySelectorAll(nodes);
    }
    return nodes
}

window.jQuery.ajax = function(url,method,body,header){
    return new Promise(function (resolve,reject){
        let request = new XMLHttpRequest();
        request.open(method,url);
        for(let key in headers) {
          let value = headers[key]
          request.setRequestHeader(key, value)
        }
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


btn.addEventListener('click',(e) => {
let promise = window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'yyy': '111'
    }
  })

  promise.then(
    (text)=>{console.log(text)},
    (request)=>{console.log(request)}
  )
})
