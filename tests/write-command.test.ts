import { test } from "@drizzle-team/brocli"
import { describe, expect, it } from "vitest"
import { write } from "../src/cli"

describe("write command", () => {
  it("should handle required parameter: input", async () => {
    const resultShort = await test(write, "    -i='./test.conf'       -o='./test.ts'")
    const resultLong = await test(write, "--input='./test.conf' --output='./test.ts'")

    if (resultShort.type === "handler") {
      expect(resultShort.options).toEqual({
        input: "./test.conf",
        output: "./test.ts",
        print: false,
      })
    }

    if (resultLong.type === "handler") {
      expect(resultLong.options).toEqual({
        input: "./test.conf",
        output: "./test.ts",
        print: false,
      })
    }
  })

  it("should handle optional parameter: print", async () => {
    const resultShort = await test(write, "    -i='./test.conf'       -o='./test.ts'  -p")
    const resultLong = await test(write, "--input='./test.conf' --output='./test.ts' --print=true")

    if (resultShort.type === "handler") {
      expect(resultShort.options).toEqual({
        input: "./test.conf",
        output: "./test.ts",
        print: true,
      })
    }

    if (resultLong.type === "handler") {
      expect(resultLong.options).toEqual({
        input: "./test.conf",
        output: "./test.ts",
        print: true,
      })
    }
  })
})
