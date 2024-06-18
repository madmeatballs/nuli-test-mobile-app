const fs = require('node:fs');

(() => {
  try {
    const dir = './components/icons/';
    const files = fs.readdirSync(dir);
    files.forEach((filename) => {
      const file = fs.readFileSync(dir + filename, { encoding: 'utf-8' });
      const fills = file.match(/fill="#[A-Fa-f0-9]{3,}"/g);
      const strokes = file.match(/stroke="#[A-Fa-f0-9]{3,}"/g);
      let colorized = file;
      if (fills) {
        fills.forEach((fill) => {
          const value = fill.substring(
            fill.indexOf('"'),
            fill.lastIndexOf('"') + 1
          );
          colorized = colorized.replace(
            `fill=${value}`,
            `fill={props.color ?? ${value.replaceAll('"', "'")}}`
          );
        });
        fs.writeFileSync(dir + filename, colorized, { encoding: 'utf-8' });
        console.log(`Colorized fill: ${dir + filename}`);
      }
      if (strokes) {
        strokes.forEach((stroke) => {
          const value = stroke.substring(
            stroke.indexOf('"'),
            stroke.lastIndexOf('"') + 1
          );
          colorized = colorized.replace(
            `stroke=${value}`,
            `stroke={props.color ?? ${value.replaceAll('"', "'")}}`
          );
        });
        fs.writeFileSync(dir + filename, colorized, { encoding: 'utf-8' });
        console.log(`Colorized stroke: ${dir + filename}`);
      }
    });
  } catch (error) {
    console.error(error);
  }
})();
