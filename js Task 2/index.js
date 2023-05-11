function multiplyByClosure(mult) {
    const values = [0, 0.5, 1, 2, 3, 4, 5, "a", false];
    return values.map(function (value) {

        // short the condition with Number
        if (Number(value)) {
            console.log(value)
            return value * mult;
        }
        return value;
    });
}

function countZeroValues(values) {
    return values.filter(function (value) {
        //is equal to Three Times 
        return value === 0;
    }).length;
}

const multiplyByTwo = multiplyByClosure(2);

console.log(multiplyByTwo);

const multiplyByThree = multiplyByClosure(3);

console.log(multiplyByThree);

// count zero values, expecting 1:F
console.log(countZeroValues(multiplyByTwo));

//declare with let
for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    //add in to string
    button.textContent = `Multiply by ${i}`;
    document.body.appendChild(button);
    button.onclick = function () {
        console.log(multiplyByClosure(i));
        const result = document.getElementsByClassName("results");
        document.getElementById("demo").innerHTML = JSON.stringify(
            multiplyByClosure(i)
        );
    };
}




//  1 Checking value if Number with Number Function on line 6. Although its was working.
//  2 Replace let with var, because var is a function scope variable and let is the block scope.
//  3 Replace == with ==== on line 17. 

