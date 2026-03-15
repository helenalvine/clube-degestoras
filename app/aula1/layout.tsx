import SlideWrapper from '../../components/SlideWrapper';

export default function Aula1Layout({ children }: { children: React.ReactNode }) {
  return (
    <SlideWrapper aulaNumber={1} aulaTitle="Contratação">
      {children}
    </SlideWrapper>
  );
}
