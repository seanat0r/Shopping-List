function handleInputShoppingList() {
    const shoppingListArray = [];

    function inputText() {
        const addItemBtn = document.getElementById("btn");
        const textField = document.getElementById("textField");

        addItemBtn.addEventListener("click", () => {
            const textFieldValue = textField.value;

            shoppingListArray.push(textFieldValue);
            textField.value = "";

            console.log(shoppingListArray);
            updateShoppingList();
        });

    }

    function updateShoppingList() {

        const shoppingListChild = document.getElementById("shoppingListChild");

        shoppingListChild.innerHTML = "";

        shoppingListArray.forEach(item => {
            console.log("In der updatefunktion: " + shoppingListArray);
            const listItem = document.createElement("li");
            let TextValue = item;

            listItem.textContent = TextValue;

            shoppingListChild.appendChild(listItem);
        })

    }


    inputText();


}

handleInputShoppingList();