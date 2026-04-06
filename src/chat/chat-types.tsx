export type UserMessage = {
    role: "user";
    text: string;
};

export type UserMessageProperty = {
    message: UserMessage;
}

export type AssistantMessage = {
    role: "assistant";
    text: string; // The transcript
    sound?: string; // Optional if not always present
};

export type AssistantMessageProperty = {
    message: AssistantMessage;
}

type Message = UserMessage | AssistantMessage;