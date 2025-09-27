import { Button } from "@workspace/ui/components/button";
import Logo from "@workspace/ui/components/logo";
import Header from "./components/header/header";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <Header />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <Logo />
      </div>
    </div>
  );
}
