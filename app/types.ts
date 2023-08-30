export interface Welcome {
  chats: Chat[];
}

export interface Chat {
  id: number;
  user: string;
  agent: string;
  lastMessageTimestamp: string;
  messages: Message[];
}

export interface Message {
  id: number;
  role: string;
  message: string;
  timestamp: string;
}

export enum Role {
  Agent = "agent",
  User = "user",
}

// form

export interface FormErrors {
  email?: string;
}

export interface FormikInputValueProps {
  name: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}
export interface FormValues {
  email: string;
  password: string;
}
