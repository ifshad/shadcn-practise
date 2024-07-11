import BinaryTree from "@/components/BinaryTree/page";
import { CarouselDemo } from "@/components/CarouselDemo/CarouselDemo";
import DropDown from "@/components/DropDown/page";
import FlipCard from "@/components/FlipCard/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-7 justify-center py-5 min-h-screen items-center">
      <CarouselDemo />
      <BinaryTree />
      <FlipCard />
      <DropDown />
    </div>
  );
}
