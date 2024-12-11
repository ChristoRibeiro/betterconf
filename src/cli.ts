import { boolean, command, run as runCommand, string } from "@drizzle-team/brocli"
import { parse } from "@pushcorn/hocon-parser"

export const run = command({
  name: "run",
  help: "[*].conf -> [*].ts",
  options: {
    read: string().alias("r").required().desc("Read a *.conf"),
    write: string().alias("w").required().desc("Write a *.ts"),
    print: boolean().alias("p").desc("Only print the generated *.ts file").default(false),
  },
  handler: async ({ read: readFile, write: writeFile, print: printOnly }) => {
    try {
      // read
      const content = await Bun.file(readFile).text()
      const parsed = await parse({ text: content })

      // print
      if (printOnly) {
        console.log(JSON.stringify(parsed, null, 2))
        return
      }

      // write
      Bun.write(writeFile, `export const config = ${JSON.stringify(parsed, null, 2)}`)
    } catch (error) {
      console.error("❌ Oops, something went wrong :", error)
      process.exit(1)
    }
  },
})

runCommand([run], {
  name: "betterconf",
  description: "From .conf to .ts",
  version: "0.1.0",
})
