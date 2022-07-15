import React, { FC, useState } from 'react';
import useMobileDetect from '../../hooks/useMobileDetect';
import LayoutDesktop from './layoutDesktop';
import LayoutMobile from './layoutMobile';

interface IProps {
  children: React.ReactElement;
  head?: React.ReactElement;
}

const UIRender: FC<IProps> = ({ head, children }: IProps) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const currentDevice = useMobileDetect();
  React.useEffect(() => {
    const status = currentDevice.isMobile();
    setIsMobile(status);
  }, [currentDevice]);
  return isMobile == null ? (
    <></>
  ) : isMobile == true ? (
    <LayoutDesktop head={head}>{children}</LayoutDesktop>
  ) : (
    <LayoutDesktop head={head}>{children}</LayoutDesktop>
  );
};


export default UIRender;