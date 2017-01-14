module. exports = function () {
  var overpayedEmployes = []

  var list = require ('../list/relatorio.json')
  var biggest = 0

  list.forEach(function (value) {
    if (Number(value.Salary) > 33000) {
      overpayedEmployes.push (value)
    }

    if (Number(value.Salary) > biggest) {
      console.log (value.Salary)
        biggest = value.Salary
    }
  })

  var info = [list.length, overpayedEmployes.length, biggest, overpayedEmployes]

  return info
}
