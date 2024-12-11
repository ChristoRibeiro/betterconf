import { boolean, command, run as runCommand, string } from "@drizzle-team/brocli"

export const run = command({
  name: "run",
  help: "Read a *.conf and write a *.ts",
  options: {
    read: string().alias("r").required().desc("Read a *.conf"),
    write: string().alias("w").required().desc("Write a *.ts"),
    print: boolean().alias("p").desc("Only print the generated *.ts file").default(false),
  },
  handler: opts => {
    console.log(opts)
  },
})

runCommand([run], {
  name: "betterconf",
  description: "From .conf to .ts",
  version: "0.1.0",
})
