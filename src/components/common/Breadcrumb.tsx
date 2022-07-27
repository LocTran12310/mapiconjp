import Link from "next/link";
import { BASE_CONSTANTS } from "../../constants/base.constants";

interface IProps {
  items: { title: string; link?: string }[]
}

const Breadcrumb = (props: IProps) => {
  const { items } = props;

  return (
    <div className='container_app w-full mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px] py-[17px]'>
      <div className="flex gap-x-[4px] text-[0.8rem]">
        <a className="home" href={`${BASE_CONSTANTS.BASE_URL}`}>TOP</a>
          {items.map((item) => {
            const { title = '', link = ''} = item;
            return (
              <div key={title} className="flex gap-x-[4px]">
                {'>'}
                <Link href={link}><a className="underline">{title}</a></Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Breadcrumb;