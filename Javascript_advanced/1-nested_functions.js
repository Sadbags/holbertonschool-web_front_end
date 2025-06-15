const globalVariable = 'Welcome';

function outer() {
    alert(globalVariable); // Accessing global variable

    const course = 'Holberton';

    function inner() {
        alert(globalVariable + ' ' + course);

        const exclamation = '!';

        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        }
        inception(); // Call the inner function
    }
    inner(); // Call the outer function
}
outer(); // Call the outermost function