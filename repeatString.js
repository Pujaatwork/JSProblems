function repeat(str, num) {
    var output = "";
    if (num > 0) {
        for (var i = 0; i < num; i++){
            output = output + str;

    }
    console.log("output");
}
else {
    console.log("error");
}
}

repeat("hey", 4)
repeat("hey", 0)
repeat("hey", -1)


