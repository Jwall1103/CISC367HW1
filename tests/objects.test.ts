import "jasmine";
import { mapShare, addGroceries } from "../src/objects";

describe("mapShare", () => {
    it("should have no c", () => {
        expect(mapShare({ 'a': 'aaa', 'b': 'bbb', 'c': 'ccc' }))
            .toEqual({ 'a': 'aaa', 'b': 'aaa' });
    });

    it("should have no c or a", () => {
        expect(mapShare({ 'b': 'xyz', 'c': 'ccc' })).toEqual({ 'b': 'xyz' });
    });

    it("should have a b", () => {
        expect(mapShare({ 'a': 'aaa', 'c': 'meh', 'd': 'hi' }))
            .toEqual({ 'a': 'aaa', 'd': 'hi', 'b': 'aaa' });
    })
});

describe("addGroceries", () => {
    it("Added together", () => {
        expect(addGroceries({ apples: 5, bananas: 3, oranges: 2 }))
            .toEqual(10);
    });
});