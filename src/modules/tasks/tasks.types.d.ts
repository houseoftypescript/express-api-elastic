export type TaskRequest = {
  title: string;
  description?: string;
  completed?: boolean;
};

export type Task = {
  id?: string;
  title?: string;
  description?: string;
  completed?: boolean;
};
