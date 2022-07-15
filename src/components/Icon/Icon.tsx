
import { ReactSVGElement } from 'react';
import { IconName } from '../../types';

const importIconByName = async (iconName: IconName) => {
  const myDefault = await import(`../../assets/icons/${iconName}.svg`);
  console.log(myDefault);
};

interface IIconProps {
  iconName: IconName;
}

const Icon = ({ iconName, ...props }: IIconProps) => {

  // const TheIcon = require(`../../assets/icons/${iconName}.svg`).default;

  // return <TheIcon {...props} />;
};

export default Icon;