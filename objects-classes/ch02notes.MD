# You Don't Know JS -- Chapter 2 Notes

How does the call-site determine where `this` will point during the execution of a function?

You must inspect the call-site and determine which of four rules applies.  

## 1.  Default Binding
This comes from the most common case of function calls: standalone function invocation.  This is the default catch-all rule when none of the other rules apply.

Is strict mode is in effect, the global object is <em>not</em> eligible for the default binding, so the `this` object is instead set to undefined.  IOW: The global object is only eligible for the default binding of the contents of the calling function are <strong>not</strong> running in `strict` mode.  

## 2. Implicit Binding
Does the call-site have a context (owning, containing) object?  That's the owner of `this`.  The implicit binding rule says that if there's a context object for a function refernce, that object should be used for the function call's `this` binding.  

Only the top/last level of an object property reference chain matters to the call-site.

If an implicitly bound function loses that binding, this falls back to the default binding, which will be either the global object or undefined -- depending on `strict` mode.

