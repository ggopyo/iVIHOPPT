function csvJSON(csv, directory) {
  var lines = csv.split("\r\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      let resultHeader = headers[j].replace('"', "");

      obj[resultHeader] = currentline[j];
      if (headers.length - 1 === j) obj["directory"] = directory;
    }

    result.push(obj);
  }

  return result; //JSON
}

export default csvJSON;
