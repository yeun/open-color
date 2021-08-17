//
//
//  𝗖 𝗢 𝗟 𝗢 𝗥
//  v 1.9.1
//
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
declare module 'open-color' {
    type Color = string;

    interface OpenColor {
        white: Color
        black: Color

        gray: Color[]
        red: Color[]
        pink: Color[]
        grape: Color[]
        violet: Color[]
        indigo: Color[]
        blue: Color[]
        cyan: Color[]
        teal: Color[]
        green: Color[]
        lime: Color[]
        yellow: Color[]
        orange: Color[]
    }

    const OpenColor: OpenColor;
    export default OpenColor;
}
