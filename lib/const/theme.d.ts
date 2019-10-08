export interface Theme {
    color: string;
    colorSuccess: string;
    colorDanger: string;
    colorError: string;
    colorWhite: string;
    colorBlack: string;
    buttons: {
        default: {
            text: string;
            color: string;
        };
        standar: {
            text: string;
            color: string;
        };
        success: {
            text: string;
            color: string;
        };
        danger: {
            text: string;
            color: string;
        };
        error: {
            text: string;
            color: string;
        };
    };
}
export declare const DefaultTheme: Theme;
//# sourceMappingURL=theme.d.ts.map