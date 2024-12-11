import { boolean, command, run as runCommand, string } from "@drizzle-team/brocli"

/**
 * Read a *.conf file
 */
export const read = command({
  name: "read",
  help: "Read a *.conf file",
  options: {
    input: string().alias("i").required().desc("The *.conf file to read"),
    print: boolean().alias("p").desc("Print the generated config").default(false),
  },
  handler: opts => {
    console.log(opts)
  },
})

/**
 * Write a *.ts from a *.conf
 */
export const write = command({
  name: "write",
  help: "Write a *.ts from a *.conf",
  options: {
    input: string().alias("i").required().desc("The *.conf file to read"),
    output: string().alias("o").required().desc("The *.ts file to write"),
    print: boolean().alias("p").desc("Print the generated config").default(false),
  },
  handler: opts => {
    console.log(opts)
  },
})

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

runCommand([read, write, run], {
  name: "betterconf",
  description: "[*].conf -> [*].ts",
  version: "0.1.0",
})
