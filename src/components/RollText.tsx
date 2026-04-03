export default function RollText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span
            key={i}
            className="inline-block overflow-hidden h-[1.2em] leading-[1.2] align-middle"
          >
            <span
              className="inline-flex flex-col transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1/2"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <span className="inline-block leading-[1.2]">{char}</span>
              <span className="inline-block leading-[1.2]">{char}</span>
            </span>
          </span>
        )
      )}
    </>
  );
}
