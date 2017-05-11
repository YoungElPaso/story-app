
//// Getting a blob from the url for it (embedded in audio player) - blob url looks like blob:https://web.whatsapp.com/6dc03690-b299-4df6-84b0-ab2bf1252ff4.
//var sample2 = fetch('blob:https://web.whatsapp.com/6dc03690-b299-4df6-84b0-ab2bf1252ff4').then(function(response){return response.blob()}).then(function(blob){console.log(blob); sample2=blob});

// Merge blobs
//var both = new Blob([sample1, sample2]);

/*var url = window.URL.createObjectURL(both);
var a = document.createElement('a');
a.href= url;
a.download = 'both';
document.body.appendChild(a);
a.click();*/
