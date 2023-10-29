import React, { Dispatch, SetStateAction } from "react";
import { IUser } from "../types/UserInterface";

interface IUserContext {
    user?: IUser;
    goal?: number;
    setGoal?: Dispatch<SetStateAction<number>>;
}

const GOAL = 2000;
const USER: IUser = {
    name: "John Doe",
    photo: "https://avatars.githubusercontent.com/u/1024025?v=4"
};

export const UserContext = React.createContext<IUserContext>({
    goal: GOAL,
    setGoal: () => {},
    user: USER
});

interface IUserProvider {
    children: React.ReactNode;
}

export const UserProvider: React.FunctionComponent<IUserProvider> = ({ children }) => {
    const [user, setUser] = React.useState<IUser>(USER);
    const [goal, setGoal] = React.useState<number>(GOAL);

    return (
        <UserContext.Provider value={{ user, goal, setGoal }}>
            {children}
        </UserContext.Provider>
    );
};
