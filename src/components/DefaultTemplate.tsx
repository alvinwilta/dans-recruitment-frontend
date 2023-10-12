import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultTemplate;
