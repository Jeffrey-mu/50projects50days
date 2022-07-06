const fs = require('fs');
const WHITE_LIST = ['README.md', 'index.html', 'images', 'init.js']
function init() {
  let data = [], index = 0
  const dirs = fs.readdirSync(__dirname)
  dirs.forEach(function (dir) {
    if (dir.charAt(0) === '.' || WHITE_LIST.includes(dir)) {
      return
    } else {
      data.push({
        id: index++,
        name: dir,
        Path: dir + '/index.html',
      })
    }
  })
  fs.writeFileSync('paths.json', JSON.stringify(data), 'utf8')
}
init()
