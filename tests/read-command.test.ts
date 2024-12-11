import { test } from "@drizzle-team/brocli"
import { describe, expect, it } from "vitest"
import { read } from "../src/cli"

describe("read command", () => {
  it("should handle required parameter: input", async () => {
    const resultShort = await test(read, "    -i='./test.conf'")
    const resultLong = await test(read, "--input='./test.conf'")

    if (resultShort.type === "handler") {
      expect(resultShort.options).toEqual({
        input: "./test.conf",
        print: false,
      })
    }

    if (resultLong.type === "handler") {
      expect(resultLong.options).toEqual({
        input: "./test.conf",
        print: false,
      })
    }
  })

  it("should handle optional parameter: print", async () => {
    const resultShort = await test(read, "    -i='./test.conf'  -p")
    const resultLong = await test(read, "--input='./test.conf' --print=true")

    if (resultShort.type === "handler") {
      expect(resultShort.options).toEqual({
        input: "./test.conf",
        print: true,
      })
    }

    if (resultLong.type === "handler") {
      expect(resultLong.options).toEqual({
        input: "./test.conf",
        print: true,
      })
    }
  })
})
