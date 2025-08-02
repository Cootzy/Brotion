"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/test.jpg"
        height="300"
        width="300"
        alt="test"
        className="dark:hidden"
      />
      <Image
        src="/test1.jpg"
        height="300"
        width="300"
        alt="test"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Brotion
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create Something
      </Button>
    </div>
  );
};

export default DocumentsPage;
