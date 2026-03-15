import SlideWrapper from '../../components/SlideWrapper';

export default function Aula3Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SlideWrapper aulaNumber={3} aulaTitle="Liderança">
        {children}
      </SlideWrapper>
    </>
  );
}
