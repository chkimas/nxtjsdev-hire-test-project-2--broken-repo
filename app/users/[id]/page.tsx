import { notFound } from "next/navigation";
import { getUserById } from "@/lib/users";
import UserDetail from "./UserDetail";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = getUserById(id);

  if (!user) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-xl">
      <UserDetail user={user} />
    </div>
  );
}

