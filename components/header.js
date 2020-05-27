import Container from '../components/container';

export default function Header({ title }) {
  return (
    <div className="pt-24 pb-2 bg-gray-900 md:pt-32">
      <Container>
        <h1 className="text-3xl font-bold text-gray-100">{title}</h1>
      </Container>
    </div>
  );
}
