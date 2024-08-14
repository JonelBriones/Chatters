import Home from "@/components/Home";
export type Thread = {
  name: string;
  text: string;
};

export default function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}
