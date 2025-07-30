// import { compileBaseUrl } from "@/utils/compileBaseUrl";
// import Image from "next/image";
// import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
// import { Popover } from "radix-ui";
import { redirect } from "next/navigation";

export default function Home() {
  console.log("IS ENV :", process.env.NODE_ENV);

  redirect("/current-games");

  return (
    <div className=" ">
      <h2>Dashboard</h2>
    </div>
  );
}
