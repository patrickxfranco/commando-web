import { MobileCard } from './MobileCard';

export function Home(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col gap-4 mx-4 mt-4">
        <MobileCard name="Stranger Things" id={0} cover="https://images6.alphacoders.com/111/1114212.jpg" />
        <MobileCard name="Vinland Saga" id={1} cover="https://images8.alphacoders.com/103/1037601.jpg" />
      </div>
    </>
  );
}
