import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        {" "}
        <Button className=" text-white bg-sky-500 hover:bg-sky-600">
          New Course
        </Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
