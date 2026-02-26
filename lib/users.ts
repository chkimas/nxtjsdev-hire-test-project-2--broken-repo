export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const users: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Product Manager"
  },
  {
    id: "2",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Senior Engineer"
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "Designer"
  },
  {
    id: "4",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "Data Analyst"
  }
];

export function getUserById(id: string): User | undefined {
  return users.find((user) => user.id === id);
}

