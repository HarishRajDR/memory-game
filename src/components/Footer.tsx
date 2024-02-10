function Footer() {
  return (
    <footer className="flex justify-between font-bricolageGrotesque items-center gap-3">
      <h3 className="flex items-center gap-1 text-xs sm:text-lg w-full">
        {"Built by "}
        <span className="flex items-center gap-1 hover:underline">
          <a href="https://github.com/HarishRajDR/" target="_blank">
            {"Harish Raj D R"}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-400"
            aria-label="Bolt icon"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </h3>
      <svg
        width="7"
        height="7"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#ffffff22" />
      </svg>

      <a href="https://github.com/HarishRajDR/memory-game/" target="_blank">
        <span className="text-xs sm:text-lg flex items-center gap-1 hover:underline">
          <OcticonMarkGithub16 /> {"GitHub"}
        </span>
      </a>
    </footer>
  );
}

export default Footer;

export function OcticonMarkGithub16() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.125rem"
      height="1.125rem"
      viewBox="0 0 18 18"
    >
      <path
        fill="#888888"
        d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
      ></path>
    </svg>
  );
}
