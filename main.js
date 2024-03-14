// Line Analyzer

// Add ENTER keydown Event Listener
document.documentElement.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    analyzeLine()
  }
})
document.getElementById('analyze').addEventListener('click', analyzeLine);



// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById('pt1x').value);
  let pt1y = Number(document.getElementById('pt1y').value);
  let pt2x = Number(document.getElementById('pt2x').value);
  let pt2y = Number(document.getElementById('pt2y').value);

  // GET LENGTH
  function getLength(x1, y1, x2, y2) {
     differenceY = y2 - y1
     differenceX = x2 - x1
    // using pythagoeream theorm to determine the length
     length = Math.sqrt((differenceY ** 2) + (differenceX ** 2)).toFixed(2)
     return length
  }

  // GET SLOPE 
  function getSlope(x1, y1, x2, y2) {
    // SLOPE = RISE / RUN
    rise = y2 - y1
    run = x2 - x1
    slope = (rise / run).toFixed(1)   
    // setting up display slope
    myDisplayScope = slope
    yInt = (y1 - slope * x1).toString()
    // add + to yInt if yInt is positive
    yInt > 0 ? yInt = `+ ${yInt}`: yInt
    // replace the minus at the start of the y-int if negative to output correctly
    yInt < 0 ? yInt = `- ${yInt.replace("-", "")}` : yInt
    yInt === `0` ? yInt = `` : yInt
    slope === 1 ? slope = '': slope
    slope == '' ? myDisplaySlope = 1 : myDisplayScope
    return myDisplayScope
  }
  
  // GET DESCRIPTION 
  function getDescription(x1, y1, x2, y2) {
    if (x1 === x2) {
      output = "vertical"
    }
    else if (y1 === y2) {
      output = "horizontal"
    }
      // if slope above zero or equal to one (changed to "")
    else if (slope > 0 || slope == "") {
      output = "increasing"
    }
    else {
      output = "decreasing"
    }
    return output
  }

  // GET POINT LOCATION
  function getPointLocation(x1, y1) {
    // QUADRANT 4
    x1 > 0 && y1 < 0 ? output = "Quadrant 4" : output;

    // QUADRANT 3
    x1 < 0 && y1 < 0 ? output = "Quadrant 3" : output;

    // QUADRANT 2
    x1 < 0 && y1 > 0 ? output = "Quadrant 2" : output;

    // QUADRANT 1
    x1 > 0 && y1 > 0 ? output = "Quadrant 1" : output;
    return output
  }

  // POINT SLOPE
  function getPointSlope(x1, y1) {
    pointSlope = (`y ${y1 < 0 ? `${y1}` : `- ${y1}`} = ${slope === 1 ? ""  : slope}(x ${x1 < 0 ? `+ ${x1.toString().slice(1, x1.length)}` : `- ${x1}`})`)
    return pointSlope
  }

  
  function getEquation() {
    // creating equation
    equation = `${slope === 0 ? "": `${slope}x`} ${yInt}`
    return equation
  }

  // Call Analyze Functions and Display results
  document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
  document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
  document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
  document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
  document.getElementById('slope-point').innerHTML = getPointSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById('equation').innerHTML = getEquation();
}
