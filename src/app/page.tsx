import Home from "@/components/Home";
import connectDB from "@/config/database";
export type Thread = {
  name: string;
  text: string;
};

export default function HomePage() {
  connectDB();
  return (
    <div>
      <Home />
    </div>
  );
}
