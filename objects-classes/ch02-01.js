function baz() {
    // call-stack is `baz`
    // so call-site is in the global scope

    console.log("baz")
    bar() // <-- call site for `bar`
}

function bar() {
    // call-stack is `baz` -> `bar`
    // so call-site is in baz

    console.log("bar")
    foo() // <-- call site for `foo`
}

function foo() {
    debugger  // open the debugger?
    // call-stack is `baz` -> `bar` -> `foo`
    // so call-site is in `bar`

    console.log("foo")
}

baz() // <- call site for `baz`