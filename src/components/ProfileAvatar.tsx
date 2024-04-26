import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";

export default async function ProfileAvatar() {
  const session = await getServerSession();
  return (
    <div>
      <Avatar>
        <AvatarImage src={session?.user?.image || ""} />
        <AvatarFallback>
          {twoFirstLetterUpperCase(session?.user?.email || "")}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

function twoFirstLetterUpperCase(str: string) {
  return str.substring(0, 2).toUpperCase();
}
