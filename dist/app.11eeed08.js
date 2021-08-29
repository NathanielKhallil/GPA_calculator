// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Fv9P":[function(require,module,exports) {
/*jshint esversion: 6 */
// calculate GPA for year one in Alberta, Canada
function calculateGpa(arg) {
  var elementList = arg.elements,
      numberList = [],
      gpaList = [],
      testForRerun = arg.querySelector('ul').lastElementChild.lastElementChild;

  if (testForRerun.value >= 0) {
    testForRerun.value = '';
  }

  Array.from(elementList).forEach(function (element) {
    if (element.value !== '') numberList.push(element.value);
  });
  numberList = numberList.map(function (x) {
    return Number(x);
  });
  numberList.forEach(function (element) {
    if (element < 50) gpaList.push(0);
    if (element > 49 && element < 55) gpaList.push(1);
    if (element > 54 && element < 60) gpaList.push(1.3);
    if (element > 59 && element < 64) gpaList.push(1.7);
    if (element > 63 && element < 67) gpaList.push(2);
    if (element > 66 && element < 70) gpaList.push(2.3);
    if (element > 69 && element < 73) gpaList.push(2.7);
    if (element > 72 && element < 76) gpaList.push(3);
    if (element > 75 && element < 80) gpaList.push(3.3);
    if (element > 79 && element < 85) gpaList.push(3.7);
    if (element > 84) gpaList.push(4);
  });
  var sum = gpaList.reduce(function (a, b) {
    return a + b;
  }),
      gpa = sum / numberList.length;
  gpa = Number((Math.abs(gpa) * 100).toPrecision(15));
  gpa = Math.round(gpa) / 100 * Math.sign(gpa);
  var gpaInput = arg.querySelector('ul').lastElementChild.lastElementChild;
  gpaInput.value = gpa;
} // reset First Year GPA, delete entry from cumulative GPA


function resetGpa(resultText) {
  resultText.reset();
} // cumulative GPA


var totalButton = document.getElementById('finalGpaBtn');

totalButton.onclick = function () {
  var gpaTotals = [];
  var totalGpa = document.getElementsByClassName('yearGpa');
  Array.from(totalGpa).forEach(function (element) {
    if (element.value == "0") {
      gpaTotals.push(5);
    }

    if (element.value != "0") {
      gpaTotals.push(element.value);
    }
  });
  gpaTotals = gpaTotals.map(function (x) {
    return Number(x);
  }).filter(function (index) {
    return index !== 0;
  });
  gpaTotals.forEach(function (element, index) {
    if (element === 5) {
      gpaTotals[index] = 0;
    }
  });
  console.log(gpaTotals);
  var result = document.getElementById("totalGpa");
  var endGpa = gpaTotals.reduce(function (a, b) {
    return a + b;
  }) / gpaTotals.length;
  endGpa = Number((Math.abs(endGpa) * 100).toPrecision(15));
  result.value = Math.round(endGpa) / 100 * Math.sign(endGpa);
};

function addDate() {
  var idSelection = document.getElementById("footer__text"),
      currentTime = new Date();
  idSelection.textContent = "Current date & time: " + currentTime.getDate().toString().padStart(2, '0') + "/" + (currentTime.getMonth() + 1).toString().padStart(2, '0') + "/" + currentTime.getFullYear() + "  " + currentTime.getHours().toString().padStart(2, '0') + ":" + currentTime.getMinutes().toString().padStart(2, '0') + ":" + currentTime.getSeconds().toString().padStart(2, '0');
}

window.onload = function () {
  setInterval(addDate, 1000);
}; // code for potential letter grade version
// for (let i = 0; i < letterList.length; i++) {
//     if (letterList[i] == 'f')
//         gpaList.push('0');//
//     if (letterList[i] == 'D')
//         gpaList.push(1); //
//     if (letterList[i] == 'D+')
//         gpaList.push(1.3);//
//     if (letterList[i] == 'C-')
//         gpaList.push(1.7);//
//     if (letterList[i] == 'C')
//         gpaList.push(2);//
//     if (letterList[i] == 'C+')
//         gpaList.push(2.3);//
//     if (letterList[i] == 'B-')
//         gpaList.push(2.7);//
//     if (letterList[i] == 'B')
//         gpaList.push(3);//
//     if (letterList[i] == 'B+')
//         gpaList.push(3.3);//
//     if (letterList[i] == 'A-')
//         gpaList.push(3.7);//
//     if (letterList[i] == 'A')
//         gpaList.push(4);
// }
},{}]},{},["Fv9P"], null)
//# sourceMappingURL=/app.11eeed08.js.map