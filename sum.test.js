import sum from "./func.js"

describe("alltest",()=>{
    test("sum",()=>{
        expect(sum(2,3)).toBe(5);
    })
      test("sum",()=>{
        expect(sum(-2,3)).toBe(1);
    })
      test("sum",()=>{
        expect(sum(2,991)).toBe(993);
    })
})