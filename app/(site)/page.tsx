import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="
    bg-neutral-900 
    rounded-lg 
    h-full 
    w-full 
    overflow-hidden 
    overflow-y-auto
  "
    >
      <Header>
        <div className="mb-2">
          <h1>돌아왔구나</h1>
        </div>
      </Header>
    </div>
  );
}
