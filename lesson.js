var GenericsValue = /** @class */ (function () {
    function GenericsValue(arg) {
        this.value = arg;
    }
    GenericsValue.prototype.getValue = function () {
        return this.value;
    };
    return GenericsValue;
}());
var genericsValue = new GenericsValue(123);
console.log(genericsValue.getValue());
