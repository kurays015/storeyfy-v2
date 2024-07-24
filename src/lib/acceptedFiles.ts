import { ACCEPTED_IMAGE_TYPES } from "@/constants";

export function acceptedFiles(type: string) {
  return ACCEPTED_IMAGE_TYPES.includes(type);
}
