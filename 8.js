function module(a, b) {
    return a % b
    }
    document.write(module(15, 6))
   
   
    function index(n) {
    return n[0]
    }
    m = index([2, 6, 5, 7, 3, 6])
    document.write(m)
   
    function arr(num, len) {
    a = []
    for (let i = 1; i <= len; i++) {
   
    a.push(num * i)
    }
    return a
    }
    document.write(arr(7, 5))
   
   
    function add(a, b) {
    return (a + b);
    }
    f = add(2, 7)
    document.write(f)
   
    function value(v) {
    count = 0
    for (let x = 0; x < v.length; x++) {
    if (v[x] == true)
    count++;
    }
    return count
    }
    val = value([true, false, true, true, true, false,])
    document.write(val)