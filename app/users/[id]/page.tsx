import { notFound } from "next/navigation";
import { getUserById } from "@/lib/users";
import UserDetail from "./UserDetail";

type PageProps = {
  params: {
    id: string;
  };
};

export default function UserDetailPage({ params }: PageProps) {
  const user = getUserById(params.id);

  if (!user) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-xl">
      <UserDetail user={user} />
    </div>
  );
}

