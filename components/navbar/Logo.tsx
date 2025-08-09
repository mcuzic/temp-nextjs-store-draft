import Link from 'next/link';
import { Button } from '../ui/button';
import { VscCircuitBoard } from 'react-icons/vsc';

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <VscCircuitBoard className="w-6 h-6" />
      </Link>
    </Button>
  );
};
export default Logo;
