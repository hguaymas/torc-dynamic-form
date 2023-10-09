export type FormField = {
  type: 'text' | 'number' | 'select';
  label: string;
  options?: string[];
};

export type FormData = {
  [key: string]: string | number;
};
