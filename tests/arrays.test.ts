import "jasmine";
import { makeEnds, unlucky1, shiftLeft } from "../src/arrays";

describe("makeEnds", () => {
    it("[1, 2, 3]", () => {
        expect(makeEnds([1, 2, 3])).toEqual([1, 3]);
    });

    it("[1, 2, 3, 4]", () => {
        expect(makeEnds([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it("[7, 4, 6, 2]", () => {
        expect(makeEnds([7, 4, 6, 2])).toEqual([7, 2]);
    })

    it("[]", () => {
        expect(makeEnds([])).toEqual([]);
    })

    it("[140]", () => {
        expect(makeEnds([140])).toEqual([140, 140]);
    })
});

describe("unlucky1", () => {
    it("[1, 3, 4, 5]", () => {
        expect(unlucky1([1, 3, 4, 5])).toBe(true);
    });

    it("[2, 1, 3, 4, 5]", () => {
        expect(unlucky1([2, 1, 3, 4, 5])).toBe(true);
    });

    it("[1, 1, 1]", () => {
        expect(unlucky1([1, 1, 1])).toBe(false);
    });
});

describe("shiftLeft", () => {
    it("[6, 2, 5, 3]", () => {
        expect(shiftLeft([6, 2, 5, 3])).toEqual([2, 5, 3, 6]);
    });
    it("[1, 2]", () => {
        expect(shiftLeft([1, 2])).toEqual([2, 1]);
    });
    it("", () => {
        expect(shiftLeft([1])).toEqual([1]);
    });
});