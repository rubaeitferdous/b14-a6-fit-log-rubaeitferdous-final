export default function InstructionsList({ instructions }) {
  return (
    <section className="mt-7" aria-labelledby="instructions-heading">
      <h2
        id="instructions-heading"
        className="m-0 font-display text-[20px] font-medium uppercase leading-6 tracking-[0.06em] text-white"
      >
        Instructions
      </h2>
      <ol className="mb-0 mt-3 list-none border-t border-[#30343c] p-0">
        {instructions.map((instruction, index) => (
          <li
            key={`${index}-${instruction}`}
            className="grid grid-cols-[28px_1fr] items-start gap-3 border-b border-[#30343c] py-2.5"
          >
            <span className="font-display text-[15px] font-medium text-[#caff00]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="m-0 text-[13px] leading-[1.6] text-[#c4c7ce]">
              {instruction}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
