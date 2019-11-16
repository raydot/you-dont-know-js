# You Don't Know JS -- Chapter 1 Notes

## Confusions

1.  `this` points to itself.  Or the function itself.  Not true, as the demos in the chapter illustrate.

2.  `this` points to its scope.  It's kind of true, but not really.  It does not point to a function's <strong>lexical scope.</strong>  Not really.  The scope "object" is not accessible to JavaScript code.  It's an inner part of the <em>Engine's</em> implementation.

Every time you feel yourself trying to mix lexical scope look-ups with `this`, remind yourself: <em>there is no bridge.</em>

3.  So that's what it's not.  What is it?

Remember it's not an author-time binding but a run time binding.  So it is <em>contextual</em> based on the conditions of the function's invocation.  `this` binding has nothing to do with where a function is declared, but everything to do with where the function i scalled.  

When a function is invoked, an activation record, otherwise known as an execution context, is created.  This record contains information about where the function was called from (call-stack), how the function was invoked, what parameters were passed, etc.  One of the properties of this function is `this`, which will be used for the duration of that function's execution.  