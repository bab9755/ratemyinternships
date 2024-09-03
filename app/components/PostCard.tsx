import Image from 'next/image';
import { FaThumbsUp, FaComment, FaShare, FaArchive } from 'react-icons/fa';

interface UserPostCardProps {
  userImage?: string;
  userName: string;
  userUniversity: string;
  postTime: string;
  content: string;
}

const UserPostCard: React.FC<UserPostCardProps> = ({
  userImage,
  userName,
  userUniversity,
  postTime,
  content,
}) => {
  return (
    <div className="w-full bg-gray-800 text-white p-12 rounded-lg shadow-md mb-6 overflow-y-auto">
      {/* User Information */}
      <div className="flex items-center mb-4">
        <Image
          src={userImage || ''}
          alt={`${userName}'s profile picture`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{userName}</h3>
          <p className="text-sm text-gray-400">{userUniversity}</p>
          <p className="text-xs text-gray-500">{postTime}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-300">{content}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center text-gray-400 border-t border-gray-700 pt-4">
        <button className="flex items-center hover:text-blue-500">
          <FaThumbsUp className="mr-2" /> Like
        </button>
        <button className="flex items-center hover:text-blue-500">
          <FaComment className="mr-2" /> Comment
        </button>
        <button className="flex items-center hover:text-blue-500">
          <FaShare className="mr-2" /> Share
        </button>
        <button className="flex items-center hover:text-blue-500">
          <FaArchive className="mr-2" /> Archive
        </button>
      </div>
    </div>
  );
};

export default UserPostCard;
