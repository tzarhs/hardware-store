export default function Navbar() {
  return (
    <nav class="bg-stone-100 w-full z-20 top-0 start-0 shadow-lg">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4 px-10">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl text-heading font-bold whitespace-nowrap">
            ΤΖΑΡΗΣ
          </span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-heading rounded hover:text-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Σχετικά με εμάς
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-heading rounded hover:text-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Υπηρεσίες
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-heading rounded hover:text-orange-500 md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Επικοινωνία
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
