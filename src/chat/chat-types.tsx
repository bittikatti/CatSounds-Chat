export type UserMessage = {
    role: "user";
    text: string;
};

export type AssistantMessage = {
    role: "assistant";
    text: string; // The transcript
    sound?: string; // Optional if not always present
};

type Message = UserMessage | AssistantMessage;