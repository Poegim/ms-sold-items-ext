if (typeof text !== 'undefined') {

    let text = document.getElementsByClassName('table-progress-text');
    for (item of text) {
                var x = item.innerText.split(' ')[0];
                item.innerText = x;
    }
    
    let all = 0;

    text = document.getElementsByClassName('table-progress-text');
    
    for (items of text) 
    {
        all = all + parseFloat(items.innerText);
    }
    
    let mid = all / text.length;
    
    if (!isNaN(mid)) 
    {
        alert(mid.toFixed(2));
    }

} else
{
    text = document.getElementsByClassName('table-progress-text');
    for (item of text) {
                var x = item.innerText.split(' ')[0];
                item.innerText = x;
    }
    
    all = 0;

    text = document.getElementsByClassName('table-progress-text');
    
    for (items of text) 
    {
        all = all + parseFloat(items.innerText);
    }
    
    mid = all / text.length;
    
    if (!isNaN(mid)) 
    {
        alert(mid.toFixed(2));
    }
}









