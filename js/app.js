{ // masala 1
    let i = 1
    function foo() {
        if (i <= 10) {
            console.log(i);
            i++
            foo()
        }
    }
    foo()
}
{ // masala 2
    let i = 10
    function foo() {
        if (i <= 100) {
            console.log(i);
            i += 10
            foo()
        }
    }
    foo()
}
{ // masala 3
    let i = 0
    let title = 0
    function foo() {
        if (i <= 10) {
            title += i
            i++
            foo()
        }
    }
    foo()
    console.log(title);
}
{
    let i = 1
    let son = 10
    let name = "laylo"
    function foo() {
        if (i <= son) {
            console.log(name);
            i++
            foo()
        }
    }
    foo()
}
{
    let a = 2
    let n = 2 
    function daraja(a, n) {
        if (n === 0) 
        return 1; 
        return a * daraja(a, n - 1); 
    }
    console.log(daraja(a, n));
}