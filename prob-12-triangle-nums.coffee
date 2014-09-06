do ->
  getTriNum = (divs) ->
    triNum = (divs * (divs + 1)) / 2
    console.log triNum
    return triNum

  getTriNum(5)