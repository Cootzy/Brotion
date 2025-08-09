"use client";

import { SingleImageDropzone } from "@/components/upload/single-image";
import {
  UploaderProvider,
  type UploadFn,
} from "@/components/upload/uploader-provider";
import { useEdgeStore } from "@/lib/edgestore";
import * as React from "react";

interface Props {
  className?: string;
  disabled?: boolean;
  onChange?: (file?: File) => void;
}

export function SingleImageDropzoneUsage({
  className,
  disabled,
  onChange,
}: Props) {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = React.useState<File>();

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });
      console.log(res);
      return res;
    },
    [edgestore]
  );

  // Handler untuk menyesuaikan tipe
  const handleChange: React.FormEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files?.[0];
    setFile(selectedFile);
    onChange?.(selectedFile);
  };

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <SingleImageDropzone
        className={className}
        disabled={disabled}
        onChange={handleChange}
        height={200}
        width={200}
        dropzoneOptions={{
          maxSize: 1024 * 1024 * 1, // 1 MB
        }}
      />
    </UploaderProvider>
  );
}
