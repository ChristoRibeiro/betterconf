declare module "@pushcorn/hocon-parser" {
  export function parse(opts: { text: string }): Promise<object>
}
