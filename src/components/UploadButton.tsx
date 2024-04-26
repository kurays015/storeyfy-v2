"use client";
import { CldUploadButton } from "next-cloudinary";

export default function UploadButton() {
  return (
    <CldUploadButton
      signatureEndpoint="api/sign-cloudinary-params"
      uploadPreset="christss"
    />
  );
}
