"use client";

import { Button } from "@/components/ui";
import type { HeaderAction } from "@/types/header";

type HeaderActionsProps = {
  actions: HeaderAction[];
};

export function HeaderActions({ actions }: HeaderActionsProps) {
  const signInAction = actions.find((action) => action.type === "signIn");
  const otherActions = actions.filter((action) => action.type !== "signIn");

  return (
    <>
      {otherActions.map((action) => (
        <Button
          key={action.href}
          variant={action.type}
          href={action.href}
          className="hidden md:inline-flex"
        >
          {action.label}
        </Button>
      ))}
      {signInAction && (
        <Button
          variant="signIn"
          href={signInAction.href}
          className="hidden lg:inline-flex"
        >
          {signInAction.label}
        </Button>
      )}
    </>
  );
}
