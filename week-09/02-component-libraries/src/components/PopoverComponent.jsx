//this is a special type of import that takes everything from the location specified and 'groups' it under one name

import * as Popover from "@radix-ui/react-popover";

export default function PopoverComponent() {
  return (
    <Popover.Root className="flex flex-col items-center">
      {/* we have used some tailwindCSS on the 'root' to style the p */}
      <Popover.Trigger asChild>
        <button>Click for a surprise</button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <section className="text-emerald-800">
            <h2>Rollercoasters are amazing!</h2>
            <p>If you do not believe me, try for yourself!</p>
            <p>You will NOT regret it! (not a threat)</p>
          </section>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
