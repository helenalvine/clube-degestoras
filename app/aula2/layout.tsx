import SlideWrapper from '../../components/SlideWrapper';

export default function Aula2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SlideWrapper aulaNumber={2} aulaTitle="Cultura">
        {children}
      </SlideWrapper>
    </>
  );
}
