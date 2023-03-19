const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]
  
  function superbowlWin(array) {
    let answer = array.find(object => (object.result === "W"))
    if (answer) {
    return answer.year
    }
    // for (let i = 0; i < array.length; i++) {
    //   let result = array[i].result
    //   let year = array[i].year
    //   debugger
    //   if (array[i].find("W"))
    //   console.log(year)
    //   return year
    // }
  }
  
  superbowlWin(record)
