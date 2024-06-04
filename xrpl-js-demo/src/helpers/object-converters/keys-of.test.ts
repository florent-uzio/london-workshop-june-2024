import { describe, expect } from "@jest/globals"
import { keysOf } from "./keys-of"

describe("keysOf", () => {
  it("outputs an array of [key, value]", () => {
    expect(keysOf({ a: "a", b: 1, c: ["a", "b"] })).toEqual(["a", "b", "c"])
  })
})
