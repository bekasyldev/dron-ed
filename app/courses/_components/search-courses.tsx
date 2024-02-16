import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchCourses = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 my-4">
      <Input placeholder="Course" />
      <Button type="submit">Search</Button>
    </div>
  );
};

export default SearchCourses;
