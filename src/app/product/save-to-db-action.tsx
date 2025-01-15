import { DL } from "@/data-layer";

import SaveToDBForm from "@/app/product/save-to-db-form";
import { SaveToDBButtonProps } from "@/types";
import SaveToDBButton from "@/app/product/save-to-db-button";

export default async function SaveToDBAction({
  isAlreadySaved,
  buttonText,
  savedText,
  serverAction,
}: SaveToDBButtonProps) {
  const session = await DL.mutations.getSession();

  return (
    <>
      {isAlreadySaved && session ? (
        <SaveToDBButton isAlreadySaved={isAlreadySaved} savedText={savedText} />
      ) : (
        <SaveToDBForm serverAction={serverAction} buttonText={buttonText} />
      )}
    </>
  );
}
