var soldPercentage = 0;
var soldItems = 0;
var purchasedItems = 0;
var soldPercentageAll = 0;
var soldItemsAll = 0;
var purchasedItemsAll = 0;
var percentageAddingResult = 0;
var itemsCalculationResult = 0;


var text = document.getElementsByClassName('table-progress-text');

//Adding percentages to percentages.
for (item of text) {
            
    soldPercentage = parseFloat(item.innerText.split(' ')[0]);
    soldPercentageAll += soldPercentage;

}
percentageAddingResult = (soldPercentageAll/text.length);
console.log("Old formula, adding percentages: " + percentageAddingResult + "%");
//End of percentage adding.


//Items calculations.

text = document.getElementsByClassName('table-progress-text');
for (item of text) {
    soldItems = item.innerText.split('(')[1];
    soldItems = parseFloat(soldItems.split('/')[0]);
    soldItemsAll += soldItems;


    purchasedItems = item.innerText.split('(')[1];
    purchasedItems = purchasedItems.split('/')[1];
    purchasedItems = purchasedItems.split(')')[0];
    purchasedItemsAll += parseFloat(purchasedItems);

}

itemsCalculationResult = (soldItemsAll/purchasedItemsAll);
itemsCalculationResult = ((itemsCalculationResult*100).toFixed(2));

alert("Kupiono: "+purchasedItemsAll+", sprzedano: " + soldItemsAll+ ". Procent sprzedanych przedmiotow: " + itemsCalculationResult + "%" );










