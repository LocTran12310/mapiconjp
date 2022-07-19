import React, { FC, useEffect, useState } from 'react';
import useMobileDetect from '../../hooks/useMobileDetect';
import HeadHtml from './common/HeadHtml';
import LayoutDesktop from './layoutDesktop';
import LayoutMobile from './layoutMobile';

interface IProps {
  children: React.ReactElement;
  head?: React.ReactElement;
}

const UIRender: FC<IProps> = ({ head, children }: IProps) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const currentDevice = useMobileDetect();
  useEffect(() => {
    const status = currentDevice.isMobile();
    setIsMobile(status);
  }, [currentDevice]);
  return isMobile == null ? (
    <HeadHtml/>
  ) : isMobile == true ? (
    <LayoutMobile head={head}>{children}</LayoutMobile>
  ) : (
    <LayoutDesktop head={head}>{children}</LayoutDesktop>
  );
};


export default UIRender;