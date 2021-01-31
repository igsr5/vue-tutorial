var data = { a: 1 }

var vm = new Vue({
  data: data,
  created: function() {
    console.log('created');
  }
})

vm.a = 2
console.log(data.a)

data.a = 3
console.log(vm.a)
