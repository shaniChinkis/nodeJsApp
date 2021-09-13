function makeOrder()
{
    user = JSON.parse(sessionStorage.getItem("Olduser"));
    sum = JSON.parse(sessionStorage.getItem("totalSum"));
    list = JSON.parse(sessionStorage.getItem("productListInCart"));

    let order = {
        orderDate: new Date().getDate(),
        orderSum: sum,
        userId: user.id,
        orderItem: []
    };

    list.forEach((val) => order.orderItem.push({
        orderItemId: 0,
        productId: prouductId,
        orderId: 0,
        quantity: val[1]
    })
    );
    fetch("api/Orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charest=utf-8'
        },
        body: JSON.stringify(order)
    }
    ).then(response => {
        if (response.ok)
            alert("ההזמנה בוצעה בהצלחה");
        else { response.json().then(error => (JSON.stringify(error.errors))).then(data => alert(data)) };
    })
}


