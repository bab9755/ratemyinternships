import { useState } from 'react';
import { FaImage, FaPen } from 'react-icons/fa';

const ReviewInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  
  const [selectedCompany, setSelectedCompany] = useState('');
  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompany(e.target.value);
  };

  const companies = ["Google", "Apple", "Microsoft", "Amazon", "Facebook"];

  return (
    <div className="text-white">
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
      >
        <FaPen className="mr-2" />
        Write a Review
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Write a Review</h2>
            <select
              value={selectedCompany}
              onChange={handleCompanyChange}
              className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select a company
              </option>
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={subject}
              onChange={handleSubjectChange}
              placeholder="Subject line"
              className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder="Post content"
              className="w-full p-3 rounded-lg mb-4 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 h-32"
            />
            <div className="flex items-center justify-between">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                <FaImage className="mr-2" /> Add Media
              </button>
              <button
                className="text-gray-400 hover:text-gray-300"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewInput;
