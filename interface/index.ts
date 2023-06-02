import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackPramsList = {
    signup: undefined;
    signin: undefined;
    reeachId: undefined;
    "initiate-reset-password": undefined;
    "reset-password": undefined;
}

export type ReeachStackPramsList = {
    reeach: NavigatorScreenParams<ReeachBottomTabsPramsList>
}

export type ReeachBottomTabsPramsList = {
    home: undefined;
    menu: undefined;
    order: undefined;
    customer: undefined;
    records: undefined;
}