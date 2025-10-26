import type { FC } from "react";
import type { UserAvatarProps } from "@/utils";

export const UserAvatar: FC<UserAvatarProps> = ({
  name = "John Doe",
  role = "Production Manager",
  avatarUrl,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center gap-3 px-2">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-(--denim-600) text-(--neutral-white) font-semibold text-sm">
          {initials}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate text-(--neutral-white)">
          {name}
        </p>
        <p className="text-xs truncate text-(--neutral-400)">{role}</p>
      </div>
    </div>
  );
};
