import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "28px",
        marginTop: "20px",
      }}
    >
      <button onClick={() => router.push("/clock")}>Clock</button>
      <button onClick={() => router.push("/stopwatch")}>StopWatch</button>
      <button onClick={() => router.push("/timer")}>Timer</button>
      <button onClick={() => router.push("/clock")}>Clock</button>
      <button onClick={() => router.push("/stopwatch")}>StopWatch</button>
      <button onClick={() => router.push("/timer")}>Timer</button>
    </div>
  );
};

export default Navbar;
