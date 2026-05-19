'use client';

import { useState, useEffect } from 'react';

export default function AICallModal({ isOpen, onClose }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState('');
  const [callProgress, setCallProgress] = useState(0);

  useEffect(() => {
    if (isCalling) {
      const interval = setInterval(() => {
        setCallProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isCalling]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    setPhoneNumber(formattedValue);
  };

  const initiateCall = async (e) => {
    e.preventDefault();
    
    if (!phoneNumber || phoneNumber.length < 14) {
      setCallStatus('Please enter a valid phone number');
      return;
    }

    setIsCalling(true);
    setCallStatus('Initializing AI bot call...');
    setCallProgress(0);

    // Simulate AI bot call process
    const callSteps = [
      { progress: 20, message: 'Connecting to AI bot system...' },
      { progress: 40, message: 'Authenticating with voice service...' },
      { progress: 60, message: 'Preparing AI assistant...' },
      { progress: 80, message: 'Initiating call to ' + phoneNumber + '...' },
      { progress: 100, message: 'AI bot call initiated successfully!' }
    ];

    for (const step of callSteps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCallStatus(step.message);
      setCallProgress(step.progress);
    }

    setTimeout(() => {
      setIsCalling(false);
      setCallStatus('Call completed! The AI bot should be calling you now.');
      setTimeout(() => {
        onClose();
        setPhoneNumber('');
        setCallStatus('');
        setCallProgress(0);
      }, 3000);
    }, 2000);
  };

  const closeModal = () => {
    if (!isCalling) {
      onClose();
      setPhoneNumber('');
      setCallStatus('');
      setCallProgress(0);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={closeModal}
          disabled={isCalling}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            AI Bot Call Demo
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enter your phone number to receive a call from our AI assistant
          </p>
        </div>

        {!isCalling ? (
          <form onSubmit={initiateCall} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="(123) 456-7890"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                maxLength="14"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Start AI Call
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {callStatus}
              </p>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${callProgress}%` }}
              ></div>
            </div>
            
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              {callProgress}% Complete
            </div>
          </div>
        )}

        {callStatus && !isCalling && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            callStatus.includes('successfully') || callStatus.includes('completed')
              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
          }`}>
            {callStatus}
          </div>
        )}

        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>This is a demo simulation. No actual calls will be made.</p>
        </div>
      </div>
    </div>
  );
}
