import { userState } from "../atoms/user";
import { selector } from "recoil";

export const isUserEmail = selector({
    key: 'isUserEmail',
    get: ({get}) => {
        const state = get(userState);
        return state.userEmail;
    },
})
