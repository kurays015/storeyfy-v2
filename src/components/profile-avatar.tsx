import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DL } from "@/data-layer";

export default async function ProfileAvatar() {
  const session = await DL.mutations.getSession();
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={session?.user?.image || ""} />
        <AvatarFallback>
          {twoFirstLetterUpperCase(session?.user?.email || "")}
        </AvatarFallback>
      </Avatar>
      <div className="customSm:hidden lg:block">
        {session?.user.email?.split("@")[0]}
      </div>
    </div>
  );
}

function twoFirstLetterUpperCase(str: string) {
  return str.substring(0, 2).toUpperCase();
}
