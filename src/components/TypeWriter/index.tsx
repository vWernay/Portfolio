import Typewriter from "typewriter-effect";

export function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Full-Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
