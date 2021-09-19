function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}





function descarga(filename, text)
{
    var element = document.createElement('a');

    element.style.display = 'none';

    //Define the data of he fie using encodeURIComponent
    element.setAttribute('href','data:text/plain;charset=utf-8,'+encondeURIComponent(text));
    document.body.appendChild(element);

    //Simulate click of the created link
    element.click();

    DocumentFragment.body.removechild(element);

}

function descarga02(filename, text)
{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);

}