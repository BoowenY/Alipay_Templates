const program = require("commander");

const helpOptions = () => {
  program.option("-w --yornyang", "a yorn option");
  program.option("-w --yornyang", "a yorn option");

  program.option("-s --src <src>", "a source folder");
  program.option(
    "-d --dest <dest>",
    "a destination folder, ex: -d src/pages, err/src/pages"
  );
  program.option("-f --framework <framework>", "your framework name");

  program.on("--help", function () {
    console.log("");
    console.log("usage");
    console.log("   yorn -v");
    console.log("   yorn -version");
  });
};

module.exports = helpOptions;
