import { test } from "@drizzle-team/brocli"
import { describe, expect, it } from "vitest"
import { run } from "../src/cli"

describe("run command", () => {
  it("should handle required parameter: input", async () => {
    const resultShort = await test(run, "    -r='./test.conf'       -w='./test.ts'")
    const resultLong = await test(run, "--read='./test.conf'   --write='./test.ts'")

    if (resultShort.type === "handler") {
      expect(resultShort.options).toEqual({ read: "./test.conf", write: "./test.ts", print: false })
    }

    if (resultLong.type === "handler") {
      expect(resultLong.options).toEqual({ read: "./test.conf", write: "./test.ts", print: false })
    }
  })

  it("should handle optional parameter: print", async () => {
    const resultShort = await test(run, "    -r='./test.conf'       -w='./test.ts' -p")
    const resultLong = await test(run, " --read='./test.conf'  --write='./test.ts' --print=true")

    if (resultShort.type === "handler") {
      expect(resultShort.options).toEqual({ read: "./test.conf", write: "./test.ts", print: true })
    }

    if (resultLong.type === "handler") {
      expect(resultLong.options).toEqual({ read: "./test.conf", write: "./test.ts", print: true })
    }
  })
})
