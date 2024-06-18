import PressableIconContainer from './PressableIconContainer';
import { BackIcon } from './icons/back-icon';

const HeaderBack: React.FC = () => {
  return (
    <PressableIconContainer>
      <BackIcon height={24} width={24} />
    </PressableIconContainer>
  );
};

export default HeaderBack;
