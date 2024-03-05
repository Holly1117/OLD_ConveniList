window.onload = function () {
    setCard();
}

function setCard() {
    var $result = $(".card-list");
    var cardList = [];
    $.getJSON("./familyMart.json", function (dataList) {
        for (var i in dataList) {
            var imageTag = `<img class=\"card-img\" src=\"${dataList[i].product_image}\">`;
            var titleTag = `<p class=\"card-title\">${dataList[i].product_name}</p>`;
            var cardTextTag = `<div class=\"card-text\"><p>${dataList[i].product_price}円(税込)</p><p>発売日${dataList[i].product_date}</p></div>`;
            var cardContentTag = `<div class=\"card\">${imageTag}<div class=\"card-content\">${titleTag + cardTextTag}</div></div>`;
            cardList.push(`<a href=\"${dataList[i].product_url}\">${cardContentTag}</a>`);
        }
        $result[0].innerHTML = cardList.join("");
    });
}