function foo() {
    var bar = "this is bar";

    function zip() {
        var quux = 42;
        bar = true;
    }

    quux = 37;

    return zip;
}
