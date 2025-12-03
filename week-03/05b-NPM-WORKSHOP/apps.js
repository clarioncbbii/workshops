import chalk from "chalk";

console.log(chalk.blue("Hello world!"));

// ------------------------------------- //

const log = console.log;

log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

log(
  `${chalk.green.underline("We")} ${chalk.white.inverse("nor")} ${chalk.green(
    "dey"
  )} ${chalk.bgRed.bold("carry last")}, ${chalk.rgb(255, 255, 0)("evah")}!`
);

log(
  `${chalk.green.overline("We")} ${chalk.white("nor")} ${chalk.green(
    "dey"
  )} ${chalk.bgBlueBright.bold("carry last")}, ${chalk.strikethrough.hex(
    "#000000"
  )("evah")}!`
);
