function trickyHoisting() {
    
    console.log(foo); // 1번 출력

    var foo = function () {
    console.log('Inner foo');
    };

    console.log(foo);

    bar();

    var bar = function () {
    console.log('Bar called');
    };

    function bar() {
    console.log('Original bar');
    }

    bar();

   }
   trickyHoisting();