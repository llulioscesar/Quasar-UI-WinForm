import {COLOR_DEFAULT, COLOR_WHITE, COLOR_ERROR, COLOR_DANGER, COLOR_BLACK, COLOR_SUCCESS} from './color'

export interface Theme {
    color:string,
    colorSuccess:string,
    colorDanger:string,
    colorError:string,
    colorWhite:string,
    colorBlack:string,
    buttons:{
        default:{
            text:string,
            color:string
        },
        standar:{
            text:string,
            color:string
        },
        success:{
            text:string,
            color:string
        },
        danger:{
            text:string,
            color:string
        },
        error:{
            text:string,
            color:string
        }
    }
}

export const DefaultTheme: Theme = {
    color: COLOR_DEFAULT,
    colorDanger: COLOR_DANGER,
    colorError: COLOR_ERROR,
    colorSuccess: COLOR_SUCCESS,
    colorWhite: COLOR_WHITE,
    colorBlack: COLOR_BLACK,
    buttons:{
        default:{
          text: COLOR_WHITE,
          color: COLOR_DEFAULT
        },
        standar:{
            text: COLOR_DEFAULT,
            color: COLOR_WHITE
        },
        success:{
            text:COLOR_WHITE,
            color: COLOR_SUCCESS
        },
        danger:{
            text: COLOR_WHITE,
            color: COLOR_DANGER
        },
        error: {
            text: COLOR_WHITE,
            color: COLOR_ERROR
        }
    }
}
