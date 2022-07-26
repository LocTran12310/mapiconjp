interface IProps {
  title: string;
  backgroundImage?: string;
};

const SectionTitle = (props: IProps) => {
  const { title, backgroundImage } = props;

  return (
    <section className="bg-cover py-[74px]" style={{backgroundImage: backgroundImage }}>
      <h1 className="text-center text-white font-bold text-2xl">{title}</h1>
    </section>
  );
};

SectionTitle.defaultProps = {
  title: "",
  backgroundImage: `url("/images/title-background.png")`,
};

export default SectionTitle;