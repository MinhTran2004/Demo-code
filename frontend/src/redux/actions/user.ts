import { Account } from "@model/Model_Account";

export const addAccount = (data:Account) => ({
    type: 'AddAccount',
    payload: data,
})