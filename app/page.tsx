import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-medium text-sky-700">Hi World</p>
      <Button variant="sky">click here</Button>
    </div>
  );
}
