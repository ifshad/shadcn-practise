import BinaryTree from "@/components/BinaryTree/page";
import { CarouselDemo } from "@/components/CarouselDemo/CarouselDemo";


export default function Home() {
  return (
    <div className="flex flex-col gap-7 justify-center py-5 min-h-screen items-center">
      <CarouselDemo />
      <BinaryTree />
    </div>
  );
}
