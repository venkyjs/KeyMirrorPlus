var tape = require("tape")
var keyMirrorPlus = require("..")

tape("keyMirrorPlus", function(test){

  var sourceSingleLevel = {
    FOO : null,
    BAR : null,
    BAZ : null
  };

  var expectedSingleLevel = {
    FOO : "FOO",
    BAR : "BAR",
    BAZ : "BAZ"
  };

  var sourceMultiLevel = {
    FOO : null,
    BAR : null,
    BAZ : null,
    XYZ : {
      ABC: null,
      JKL: null
    }
  };

  var expectedMultiLevel = {
    FOO : "FOO",
    BAR : "BAR",
    BAZ : "BAZ",
    XYZ: {
      ABC : "ABC",
      JKL: "JKL"
    }
  };

  var sourceArray = ["FOO", "BAR", "BAZ"];

  var expectedObjectFromArray =  {
    FOO : "FOO",
    BAR : "BAR",
    BAZ : "BAZ"
  };

  function performTest(source, expected, type) {
    var mirrored = keyMirrorPlus(source);
    test.notEqual(mirrored, source, type + ": The output object is different than source object");
    test.equal(typeof mirrored, "object", type + ": The returned object is of correct data type");
    test.deepEqual(mirrored, expected, type + ": The structure of the output is as expected");
  }

  performTest(sourceSingleLevel, expectedSingleLevel, "Single-Level");
  performTest(sourceMultiLevel, expectedMultiLevel, "Multi-Level");
  performTest(sourceArray, expectedObjectFromArray, "Single-Level From Array");

  test.end();

});
