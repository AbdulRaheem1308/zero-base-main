// import {getDirection, parseNumericValue, mergeStyle, getColorStyle, removeOpacityHelpers, getBorderStyle} from './helpers';
import { BLACK, BLUE, GREEN, YELLOW } from "../../../constants/colors";
import { getStyle } from "./index";
import styles from "./styles";
import themes from "./themes";

// jest.mock('./helpers');
// jest.mock('./styles');
// jest.mock('./themes');n

describe("getStyle", () => {
    it("Common", () => {
        expect({ aspectRatio: 1 }).toEqual(getStyle("aspect-square"));
        expect({ aspectRatio: 16 / 9 }).toEqual(getStyle("aspect-video"));
        expect({ alignItems: `center` }).toEqual(getStyle("items-center"));
    });
    it("Padding", () => {
        expect({ padding: 16 }).toEqual(getStyle("p-16"));
        expect({ paddingTop: 16 }).toEqual(getStyle("pt-16"));
        expect({ paddingRight: 16 }).toEqual(getStyle("pr-16"));
        expect({ paddingBottom: 16 }).toEqual(getStyle("pb-16"));
        expect({ paddingHorizontal: 16 }).toEqual(getStyle("px-16"));
        expect({ paddingVertical: 16 }).toEqual(getStyle("py-16"));
        expect({ paddingBottom: 10, paddingRight: 16 }).toEqual(getStyle("pb-10 pr-16"));
        expect({ padding: 10, paddingRight: 16 }).toEqual(getStyle("p-10 pr-16"));
    });
    it("Margin", () => {
        expect({ margin: 16 }).toEqual(getStyle("m-16"));
        expect({ marginTop: 16 }).toEqual(getStyle("mt-16"));
        expect({ marginRight: 16 }).toEqual(getStyle("mr-16"));
        expect({ marginBottom: 16 }).toEqual(getStyle("mb-16"));
        expect({ marginHorizontal: 16 }).toEqual(getStyle("mx-16"));
        expect({ marginVertical: 16 }).toEqual(getStyle("my-16"));
        expect({ marginBottom: 10, marginRight: 16 }).toEqual(getStyle("mb-10 mr-16"));
        expect({ margin: 10, marginHorizontal: 16 }).toEqual(getStyle("m-10 mx-16"));
    });
    it("Height & Width", () => {
        expect({ height: 100 }).toEqual(getStyle("h-100"));
        expect({ width: 150 }).toEqual(getStyle("w-150"));
        expect({ minHeight: 100 }).toEqual(getStyle("min-h-100"));
        expect({ maxHeight: 100 }).toEqual(getStyle("max-h-100"));
        expect({ minWidth: 100 }).toEqual(getStyle("min-w-100"));
        expect({ maxWidth: 100 }).toEqual(getStyle("max-w-100"));
        expect({ height: 101, width: 151 }).toEqual(getStyle("h-101 w-151"));
    });
    it("Flex", () => {
        expect({ flex: 1 }).toEqual(getStyle("flex-1"));
        expect({ flex: 0.5 }).toEqual(getStyle("flex-0.5"));
        expect({ flexGrow: 2 }).toEqual(getStyle("flex-grow-2"));
        expect({ flexGrow: 0.8 }).toEqual(getStyle("flex-grow-0.8"));
        expect({ flexShrink: 3 }).toEqual(getStyle("flex-shrink-3"));
        expect({ flexShrink: 0.2 }).toEqual(getStyle("flex-shrink-0.2"));
        expect({ flexGrow: 3 }).toEqual(getStyle("grow-3"));
        expect({ flexGrow: 1.8 }).toEqual(getStyle("grow-1.8"));
        expect({ flexShrink: 5 }).toEqual(getStyle("shrink-5"));
        expect({ flexShrink: 0.3 }).toEqual(getStyle("shrink-0.3"));
    });
    it("BackgroundColor", () => {
        expect({ backgroundColor: BLACK }).toEqual(getStyle(`bg-${BLACK}`));
        expect({ backgroundColor: YELLOW }).toEqual(getStyle(`bg-${YELLOW}`));
        expect({ backgroundColor: GREEN }).toEqual(getStyle(`bg-${GREEN}`));
        expect({ backgroundColor: BLUE }).toEqual(getStyle(`bg-${BLUE}`));
        expect({ backgroundColor: "#EAEAEA" }).toEqual(getStyle(`bg-[#EAEAEA]`));
        expect({ backgroundColor: "rgba(1,1,1,0.5)" }).toEqual(getStyle(`bg-[rgba(1,1,1,0.5)]`));
        expect({ backgroundColor: "rgb(1,1,1)" }).toEqual(getStyle(`bg-[rgb(1,1,1)]`));
        expect({ backgroundColor: "rgba(76, 139, 251, 0.5)" }).toEqual(getStyle(`bg-${BLUE}/50`));
    });
    it("TintColor", () => {
        expect({ tintColor: BLACK }).toEqual(getStyle(`tint-${BLACK}`));
        expect({ tintColor: YELLOW }).toEqual(getStyle(`tint-${YELLOW}`));
        expect({ tintColor: GREEN }).toEqual(getStyle(`tint-${GREEN}`));
        expect({ tintColor: BLUE }).toEqual(getStyle(`tint-${BLUE}`));
        expect({ tintColor: "#EAEAEA" }).toEqual(getStyle(`tint-[#EAEAEA]`));
        expect({ tintColor: "rgba(1,1,1,0.5)" }).toEqual(getStyle(`tint-[rgba(1,1,1,0.5)]`));
        expect({ tintColor: "rgb(1,1,1)" }).toEqual(getStyle(`tint-[rgb(1,1,1)]`));
        expect({ tintColor: "rgba(76, 139, 251, 0.5)" }).toEqual(getStyle(`tint-${BLUE}/50`));
    });
    it("Border", () => {
        expect({ borderWidth: 1 }).toEqual(getStyle(`border`));
        expect({ borderWidth: 2 }).toEqual(getStyle(`border-2`));
        expect({ borderColor: "black" }).toEqual(getStyle(`border-black`));
        expect({ borderColor: YELLOW }).toEqual(getStyle(`border-[${YELLOW}]`));
        expect({ borderTopColor: YELLOW }).toEqual(getStyle(`border-t-[${YELLOW}]`));
        expect({ borderRightColor: GREEN }).toEqual(getStyle(`border-r-[${GREEN}]`));
        expect({ borderColor: "rgba(1,1,1,0.5)" }).toEqual(getStyle(`border-[rgba(1,1,1,0.5)]`));
        expect({ borderColor: "rgb(1,1,1)" }).toEqual(getStyle(`border-[rgb(1,1,1)]`));
        expect({ borderColor: "rgba(76, 139, 251, 0.5)" }).toEqual(getStyle(`border-${BLUE}/50`));
        expect({ borderStyle: "dashed" }).toEqual(getStyle(`border-dashed`));
        expect({ borderStyle: "dotted" }).toEqual(getStyle(`border-dotted`));
        expect({
            borderWidth: 2,
            borderColor: YELLOW,
            borderStyle: "solid",
            borderRightColor: GREEN,
        }).toEqual(getStyle(`border-2 border-[${YELLOW}] border-solid border-r-[${GREEN}]`));
    });
    // it('Theme', () => {
    //     //expect({tintColor:YELLOW}).toEqual(getStyle(`tint-${YELLOW}`))
    // });
});
