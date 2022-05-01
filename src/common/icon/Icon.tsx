import { useTheme } from 'styled-components';
import { ReactComponent as HomeIcon } from './home.svg';
import { ReactComponent as LogoIcon } from './react-logo.svg';

const iconType = {
  home: HomeIcon,
  logo: LogoIcon,
};

type IconType = keyof typeof iconType;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: IconType;
  color?: 'primary' | 'secondary';
}

export const Icon = ({ type, color, ...svgProps }: IconProps) => {
  const theme = useTheme();
  const IconComponent = iconType[type];
  const iconColor = color ? theme.color[color] : undefined;

  return (
    <IconComponent
      {...svgProps}
      fill={iconColor}
      stroke={iconColor}
    ></IconComponent>
  );
};
