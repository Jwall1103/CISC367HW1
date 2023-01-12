import "jasmine";
import { notString, backAround, countTriple } from "../src/strings";

describe("notString", () => {
    it("candy", () => {
        expect(notString("candy")).toBe("not candy");
    });

    it("x", () => {
        expect(notString("x")).toBe("not x");
    });

    it("not bad", () => {
        expect(notString("not bad")).toBe("not bad");
    });
});

describe("backAround", () => {
    it("cat", () => {
        expect(backAround('cat')).toBe("tcatt");
    });

    it("Hello", () => {
        expect(backAround('Hello')).toBe('oHelloo');
    });

    it("a", () => {
        expect(backAround("a")).toBe("aaa");
    });
});

describe("countTriple", () => {
    it("abcXXXabc", () => {
        expect(countTriple("abcXXXabc")).toBe(1);
    });

    it("xxxabyyyycd", () => {
        expect(countTriple("xxxabyyyycd")).toBe(3);
    });

    it("a", () => {
        expect(countTriple("a")).toBe(0);
    });
});