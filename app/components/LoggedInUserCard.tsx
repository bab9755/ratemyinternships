import Image from 'next/image';
import ReviewInput from './ReviewInput';
interface LoggedInUserCardProps {
  userName: string;
  userUniversity: string;
  userProfilePicture: string;
}

const LoggedInUserCard: React.FC<LoggedInUserCardProps> = ({
  userName,
  userUniversity,
  userProfilePicture,
}) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-sm mx-auto flex items-center">
      <Image
        src={userProfilePicture}
        alt={`${userName}'s profile picture`}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="ml-4">
        <h3 className="text-xl font-bold">Hello, {userName}!</h3>
        <p className="text-sm text-gray-400">{userUniversity}</p>
      </div>
      <ReviewInput/>
    </div>
  );
};

export default LoggedInUserCard;
