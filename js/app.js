function count()
{
    let soldItems = 0;
    let purchasedItems = 0;
    let soldItemsAll = 0;
    let purchasedItemsAll = 0;
    let itemsCalculationResult = 0;
    
    const text = document.getElementsByClassName('table-progress-text');
    
    for (item of text) {
        soldItems = item.innerText.split('(')[1];
        soldItems = parseFloat(soldItems.split('/')[0]);
        soldItemsAll += soldItems;
    
        purchasedItems = item.innerText.split('(')[1];
        purchasedItems = purchasedItems.split('/')[1];
        purchasedItems = purchasedItems.split(')')[0];
        purchasedItemsAll += parseFloat(purchasedItems);
    
    }
    
    itemsCalculationResult = soldItemsAll/purchasedItemsAll;
    itemsCalculationResult = ((itemsCalculationResult*100).toFixed(2));
    
    alert("Kupiono: " + purchasedItemsAll + ", sprzedano: " + soldItemsAll + ". Procent sprzedanych przedmiotow: " + itemsCalculationResult + "%" );
}

count();











