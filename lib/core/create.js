const program = require("commander");

const { addStore, addcmp, addpg } = require("./actions");

const createCommands = () => {
  program
    .command("addcmp <name>")
    .description(
      "add react component, ex: ya addcpn NavBar [-d src/components]"
    )
    .action((name) => addcmp(name, program.dest || `src/components/${name}`));

  program
    .command("addpg <name>")
    .description("add react page, ex: yang addpage Home [-d dest]")
    .action((name) => {
      addpg(name, program.dest || `src/pages/${name}`);
    });

  program
    .command("addstore <name>")
    .description("add react store, ex: yang addstore favor [-d dest]")
    .action((name) => {
      addStore(name, program.dest || `src/store/modules/${name}`);
    });
};

module.exports = createCommands;