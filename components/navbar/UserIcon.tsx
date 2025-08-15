import { LuUser } from 'react-icons/lu';
import { currentUser, auth } from '@clerk/nextjs/server';

const UserIcon = async () => {
  const user = await currentUser();
  const profileImg = user?.imageUrl;

  if (profileImg) {
    return (
      <img
        src={profileImg}
        alt=""
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
};
export default UserIcon;
