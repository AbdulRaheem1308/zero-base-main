import {
    YELLOW,
    WHITE,
    LIGHT_GREY,
    DARK_GREY,
    BLUE,
} from "../../constants/colors";

const themes = [
    [`mbbTextWhite`, { color: WHITE }],
    [`mbbTextWhite50`, { color: `${WHITE}50` }],
    [`mbbTextDarkGrey`, { color: DARK_GREY }],
    [`mbbTextSemiBold`, { fontWeight: "600" }],
    [`mbbTextBold`, { fontWeight: "700" }],
    [`mbbFont12`, { fontSize: 12 }],
    [`mbbFont14`, { fontSize: 14 }],
    [`mbbFont16`, { fontSize: 16 }],
    [`mbbFont24`, { fontSize: 24 }],
    [`mbbFontFamily`, { fontFamily: "Montserrat" }],
    [`mbbFontFamilyLight`, { fontFamily: "Montserrat-Light" }],
    [`mbbHR`, { backgroundColor: YELLOW, height: 2, alignSelf: "stretch" }],
    [`mbbBGColorLightGrey`, { backgroundColor: LIGHT_GREY }],
    [`mbbBGColorDarkGrey`, { backgroundColor: DARK_GREY }],
    [`mbbBGColorWhite`, { backgroundColor: WHITE }],
    [
        `mbbImageAbsoluteCenter`,
        {
            position: "absolute",
            top: 20,
            left: 115,
            borderRadius: 1000,
            borderColor: BLUE,
            borderWidth: 2,
        },
    ],
    [
        `mbbImageRounded`,
        {
            width: 130,
            height: 130,
            borderRadius: 65,
            alignSelf: "center",
            resizeMode: "contain",
        },
    ],
];

export default themes;
